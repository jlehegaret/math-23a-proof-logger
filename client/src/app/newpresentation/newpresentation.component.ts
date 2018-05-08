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
  @Input() user:any;
  @Input() proofs:any;
  @Input() qualifiedListeners:any;

  // When a new presentation is created, send event to parent to refresh list
  @Output() newPres = new EventEmitter();
  @Output() cancelNewPres = new EventEmitter();

  // chosen via newPresentation form dropdowns
  selectedProof:any;
  selectedListener:any;

  // bound to newPresentation form fields
  newPresentation:any;

  constructor(private proofService:ProofService,
              private presentationService:PresentationService) { }

  ngOnInit() {
    // log the provided userID as the presenter
    this.newPresentation = {'presenterID' : this.user._id };
  }

  // html form triggers this event via submit
  save(form) : void {

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

  // html form triggers this event via Cancel button
  cancelNew(form) : void {
      this.cancelNewPres.emit();
      form.reset();
  }

}
