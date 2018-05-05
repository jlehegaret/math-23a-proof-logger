import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { ProofService } from '../proofs.service';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css'],
  providers: [ProofService]
})

export class ProofComponent implements OnInit {

    @Input() proof; // from app-user tag in app.component.html

    // When a proof is deleted, send event to parent to refresh list
    @Output() deletedProof = new EventEmitter();

    editing:boolean=false;

    constructor(private proofService: ProofService) {}

    ngOnInit() {}

    setEditMode(mode):void{
        this.editing = (mode ? true : false);
    }

    updateProof(obj:any):void {
        this.proof.name = obj.nameField;
        this.proofService.updateProof(this.proof._id, this.proof.name)
      .     subscribe((result)=>{
                this.setEditMode(false);
            });
    }

    // deletes proof using ProofService, notifies parent component
    deleteProof() {
        this.proofService.deleteProof(this.proof._id)
            .subscribe((result)=>{
                this.deletedProof.emit();
                this.setEditMode(false);
        });
    }
}
