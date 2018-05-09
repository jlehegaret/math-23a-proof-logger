// This component is used to present a specific user's information
//   and to provide RUD functionality on that user's record
//   (not CRUD - the C is handled via the "newuser" component).

import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';
import { PresentationService } from '../presentations.service';
import { ProofService } from '../proofs.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserService, PresentationService, ProofService]

})

export class UserComponent implements OnInit {

    @Input() user; // from app-user tag in app.component.html

    // When a user is deleted, send event to parent to refresh parent
    @Output() deletedUser = new EventEmitter();

    // user's display preference
    editing:boolean=false;

    constructor(private userService: UserService,
                private presentationService: PresentationService,
                private proofService: ProofService) {}

    ngOnInit() {}

    // set user's display preference
    setEditMode(mode):void{
        this.editing = (mode ? true : false);
    }

    // change user's information by calling service,
    //   notify parent
    updateUser(obj:any):void {
        this.user.status = obj.statusField;
        this.user.email = obj.emailField;
        this.user.availability = obj.availabilityField;
        this.userService.updateUser(this.user._id, this.user)
      .     subscribe((result)=>{
                this.setEditMode(false);
            });
    }

    // delete user using user service, notify parent component
    //  AND remove user as qualified listener from all proofs
    //  AND delete all presentations involving the user, 
    deleteUser() {

        let deleteU:boolean;  // should we delete this user
        let userID:string = this.user._id; // the user's ID
        let qualified:any;    // presentations that qualified user as listener
        let others:any = [];       // all other presentations
        let numPres:number=0;   // total number of presentations
        let message:string;   // msg to current user

        deleteU = true;

        // before deleting a user, we need to see how many
        //  presentations have been associated with that user.
        this.presentationService.getPresentedConfirmed(userID)
            .subscribe( (results1) => {

            qualified = results1;
            numPres = numPres + qualified.length;

            this.presentationService.getPresentedPending(userID)
                .subscribe( (results) => {
                others = results;
            this.presentationService.getPresentedDenied(userID)
                .subscribe( (results) => {
                others = others.concat(results);
            this.presentationService.getListenedPending(userID)
                .subscribe( (results) => {
                others = others.concat(results);
            this.presentationService.getListenedConfirmed(userID)
                .subscribe( (results) => {

                others = others.concat(results);             
                numPres = numPres + others.length;

                if( numPres > 0) {
                    message = "This user has been involved with "  
                        + numPres + " presentations. "
                        + "Are you sure you want to delete this account?"; 
                    if (!confirm(message)){
                        deleteU = false;
                    }
                }
        
                if(deleteU) {
                    // remove from all qualified listener lists
                    for(let i = 0; i < qualified.length; i++) {
                        let proofID = qualified[i].proof._id;
                        this.proofService
                            .deleteListener(proofID, userID)
                            .subscribe( (result)=> {
                        console.log("No longer listener for proof " 
                                    + qualified[i].proof.name);
                            });
                    }
        
                    // delete ALL of user's presentations
                    others = others.concat(qualified);
                    for (let j = 0; j < others.length; j++) {
                        this.presentationService
                            .deletePresentation(others[j]._id)
                            .subscribe((result)=>{
                                console.log("Deleted presentation " 
                                                + others[j]._id);    
                        });
                    }
                  
                    // delete the user itself
                    this.userService.deleteUser(this.user._id)
                        .subscribe((result)=>{
                            this.deletedUser.emit();
                            this.setEditMode(false);
                    });
                }
            });});});});
        });
    }
}