import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PresentationService } from '../presentations.service';
import { UserService } from '../users.service';
import { ProofService } from '../proofs.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  providers: [PresentationService, UserService, ProofService]
})
export class PresentationComponent implements OnInit {

  // from app-presentation tag userdashboard.component.html

  // the current presentation
  @Input() presentation:any; 
  // specifies presentation or listen, pending or confirmed.
  @Input() mode:string; 

  // when a listening has been confirmed, will
  // need to update both pending and confirmed lists
  @Output() confirmed = new EventEmitter(); 

  constructor(private presentationService:PresentationService,
              private userService:UserService,
              private proofService:ProofService) {
  }

  ngOnInit() {}

  confirmListened() : void {
    this.presentationService
        .updatePresentation(this.presentation._id, "confirmed")
        .subscribe((result)=>{
          this.confirmed.emit();
        });
  }
}
