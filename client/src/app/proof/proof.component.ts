// This component is used to present a specific proof's information
//   and to provide RUD functionality (not CRUD - the C is handled
//   via the "newproof" component).
// The user may choose whether or not to view each qualified listener
//   per proof in addition to the proof's name and number of listeners.

import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { ProofService } from '../proofs.service';
import { PresentationService } from '../presentations.service';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css'],
  providers: [ProofService, PresentationService]
})

export class ProofComponent implements OnInit {

    @Input() proof; // from app-user tag in app.component.html

    // When a proof is deleted, send event to parent to refresh list
    @Output() deletedProof = new EventEmitter();

    // display mode options
    editing:boolean=false;        
    showListeners:boolean= false;

    constructor(private proofService: ProofService,
                private presentationService: PresentationService) {}

    ngOnInit() {
        // sort listeners in order of email address
        this.proof.qualifiedListeners.sort( (a, b) => {
            if (a.email < b.email) {
                return -1;
            } else {
                return 1;
            }
        });
    }

    // whether or not the user wants to edit the proof
    setEditMode(mode):void{
        this.editing = (mode ? true : false);
    }

    // whether or not the user wants to see each listener for the proof
    setShowListenersMode(mode):void{
        this.showListeners = (mode ? true : false);
    }

    // save changes to the proof name using proof service, 
    //  notify parent component
    updateProof(obj:any):void {
        this.proof.name = obj.nameField;
        this.proofService.updateProof(this.proof._id, this.proof.name)
            .subscribe((result)=>{
                this.setEditMode(false);
            });
    }

    // delete proof using ProofService, notify parent component
    //   and delete all presentations of this proof as well!
    deleteProof() {

        let deleteP:boolean;
        let pList:any = [];
        let message:string;

        deleteP = true;

        this.presentationService.getByProof(this.proof._id)
            .subscribe( (results) => {
            
            pList = results;    
            if( pList.length > 0) {
                message = "There are already " + pList.length 
                    + " presentations for this proof. "
                    + "Are you sure you want to delete it?"; 
                if (!confirm(message)){
                    deleteP = false;
                }
            }
            if(deleteP) {
                // delete any presentations
                for (let i = 0; i < pList.length; i++) {
                    this.presentationService
                        .deletePresentation(pList[i]._id)
                        .subscribe((result)=>{
                            console.log("Deleted " + pList[i].presenter.email 
                                + "'s presentation");    
                    });
                }

                // delete the proof itself
                this.proofService.deleteProof(this.proof._id)
                    .subscribe((result)=>{
                        this.deletedProof.emit();
                        this.setEditMode(false);
                });
            }
        });
    }
}
