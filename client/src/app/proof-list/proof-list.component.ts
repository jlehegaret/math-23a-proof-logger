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

    proofList = null;
    numProofs = 0;
    adding:boolean=false;

    ngOnInit() {
        this.updateProofList();
    }

    setAddingMode(mode):void{
        this.adding = (mode ? true : false);
    }

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
    }
}