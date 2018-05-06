import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';
import { ProofService } from '../proofs.service';
import { PresentationService } from '../presentations.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
  providers: [ UserService, ProofService, PresentationService ]
})
export class UserDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userService:UserService,
              private proofService:ProofService,
              private presentationService:PresentationService) { 
  }

  user:any = {'email': ''};  // will be fetched from UserService
  proofs:any;     // list of all class proofs
  adding:boolean=false;

  // this user's presented & confirmed pres.
  presented_confirmed:any; 
  num_presented_confirmed = 0;
 
  // this user's presented & pending pres.
  presented_pending:any; 
  num_presented_pending = 0;

  // this user's confirmed listened-to pres. 
  listened_confirmed:any;  
  num_listened_confirmed = 0;

  // this user's pending listened-to pres.
  listened_pending:any;   
  num_listened_pending = 0;

  new_presentation = {};

  ngOnInit() {  
    this.getUser(); 
    this.updatePresentedConfirmed();
    this.updatePresentedPending();
    this.updateListenedConfirmed();
    this.updateListenedPending();
    this.updateProofs();
  }

  setAdding(mode):void{
      this.adding = (mode ? true : false);
  }

  // reads URL to get correct user's info
  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
        .subscribe( (user) => {
          this.user = user;
        });
  }

  // gets collection of Presentations, adds more readable info
  updatePresentedConfirmed(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.presentationService
        .getPresentedConfirmed(id)
        .subscribe( (results) => {

          this.presented_confirmed = results;
          this.num_presented_confirmed = this.presented_confirmed.length;

          // enrich with human-readable info
          for (let pres of this.presented_confirmed) {

            this.userService.getUser(pres.presenterID)
                .subscribe( (user) => {
                    pres.presenter = user;
                    console.log(user);
                });

            this.userService.getUser(pres.listenerID)
                .subscribe( (user) => {
                    pres.listener = user;
                    console.log(user);
                });

            this.proofService.getProof(pres.proofID)
                .subscribe( (proof) => {
                    pres.proof = proof;
                    console.log(proof);
                });
          }       
        });
  }

  // gets collection of Presentations, adds more readable info
  updatePresentedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getPresentedPending(id)
        .subscribe( (results) => {
          this.presented_pending = results;
          this.num_presented_pending = this.presented_pending.length;
        });
  }

  // gets collection of Presentations, adds more readable info
  updateListenedConfirmed(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getListenedConfirmed(id)
        .subscribe( (results) => {
          this.listened_confirmed = results;
          this.num_listened_confirmed = this.listened_confirmed.length;
        });
  }

  // gets collection of Presentations, adds more readable info
  updateListenedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getListenedPending(id)
        .subscribe( (results) => {
          this.listened_pending = results;
          this.num_listened_pending = this.listened_pending.length;
        });
  }

  // updates both listening groups when a listen is confirmed
  updateListened() : void {
      this.updateListenedPending();
      this.updateListenedConfirmed();
  }

  // updates presented group and proofs list when a new pres is registered
  updatePresented() : void {
      this.updatePresentedPending();
      this.updateProofs();
  }

  // gets collection of Proofs - TODO: filter out already-presented ones
  updateProofs(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.proofService.listProofs()
        .subscribe( (proofs) => {
          this.proofs = proofs;
        });
  }

}





