// This component is used to create a new proof
//  to be added to the class's list.

import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ProofService } from '../proofs.service';

@Component({
  selector: 'app-newproof',
  templateUrl: './newproof.component.html',
  styleUrls: ['./newproof.component.css'],
  providers: [ProofService]
})

export class NewProofComponent implements OnInit {

  // When a new proof is created, send event to parent to refresh list
  @Output() newProof = new EventEmitter();

  // When a new proof is cancelled, send event to parent to refresh form
  @Output() cancelNewProof = new EventEmitter();

  // proof object, bound to the form fields
  proof:any = {};

  constructor(private proofService:ProofService) {}

  ngOnInit() {}

  // html form triggers this event via submit
  save(form) : void {

      // add proof, then notify parent of updated list
      this.proofService.addProof(this.proof.name)
          .subscribe( (proof) => {
              this.newProof.emit();
              form.reset();
          });
  }

  // html form triggers this event via Cancel button
  cancelNew(form) : void {
      this.cancelNewProof.emit();
      form.reset();
  }
}
