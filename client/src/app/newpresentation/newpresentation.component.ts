// This component allows a student to register the completion
//   of a presentation, as presented to a qualified listener

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProofService } from '../proofs.service';
import { PresentationService } from '../presentations.service';

@Component({
  selector: 'app-newpresentation',
  templateUrl: './newpresentation.component.html',
  styleUrls: ['./newpresentation.component.css'],
  providers: [ProofService, PresentationService]
})
export class NewPresentationComponent implements OnInit {
  // the current student
  @Input() user:any;    
  
  // list of all proofs the student may have presented
  @Input() proofs:any;    

  // list of all qualified listeners for the selected proof
  // (TODO: this should be refreshed from the parent component
  //    once a proof is selected - is currently all users)
  @Input() qualifiedListeners:any; 

  // When a new presentation is created, send event to parent to refresh list
  @Output() newPres = new EventEmitter();

  // When a new presentation is cancelled, send event to parent to refresh form
  @Output() cancelNewPres = new EventEmitter();

  // bound to newPresentation form fields, gathers data
  newPresentation:any;

  constructor(private proofService:ProofService,
              private presentationService:PresentationService) {}

  ngOnInit() {
    // log the provided userID as the presenter
    this.newPresentation = {'presenterID' : this.user._id };
  }

  // html form triggers this event via submit
  save(form) : void {
      // save new presentation only if have all info
      if(this.newPresentation.listenerID && this.newPresentation.proofID) {

          // add presentation, then notify parent of updated list
          this.presentationService
              .addPresentation(this.newPresentation.presenterID,
                              this.newPresentation.listenerID,
                              this.newPresentation.proofID)
              .subscribe( (pres) => {
                  this.newPres.emit();
                  form.reset();
              });
      }
  }

  // notify parent no new presentation after all
  cancelNew(form) : void {
      this.cancelNewPres.emit();
      form.reset();
  }
}
