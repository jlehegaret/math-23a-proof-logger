// This component is the gateway to all CRUD functionalty
//   for a class's proof list

import { Component, OnInit } from '@angular/core';
import { ProofService } from '../proofs.service';

@Component({
  selector: 'app-proof-list',
  templateUrl: './proof-list.component.html',
  styleUrls: ['./proof-list.component.css'],
  providers: [ProofService]
})

export class ProofListComponent implements OnInit {

   constructor(private proofService:ProofService) {}

    // initial list of proofs, until populated by service
    proofList = null;
    numProofs = 0;

    // user display option
    adding:boolean=false;

    ngOnInit() {
        // call service to obtain all proof data
        this.updateProofList();
    }

    // change user's display preference
    setAddingMode(mode):void{
        this.adding = (mode ? true : false);
    }

    // call service to obtain all proof data
    //  ensure that proofs are sorted by name
    updateProofList():void {
        this.proofService.listProofs().subscribe( 
            (proofs) => {
                this.proofList = proofs;
                this.proofList.sort( 
                    (a, b) => {
                        if (a.name < b.name) {
                            return -1;
                        } else {
                            return 1;
                        }
                });
                this.numProofs = this.proofList.length;
        });
        this.setAddingMode(false);
    }
}