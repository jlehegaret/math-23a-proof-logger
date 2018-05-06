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
    this.getPresentedConfirmed();
    this.getPresentedPending();
    this.getListenedConfirmed();
    this.getListenedPending();
    this.getProofs();
  }

  // reads URL to get correct user's info
  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
        .subscribe( (user) => {
          this.user = user;
        });
  }

  // gets collection of Proofs - TODO: filter out already-presented ones
  getProofs(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.proofService.listProofs()
        .subscribe( (proofs) => {
          this.proofs = proofs;
        });
  }

  // gets collection of Presentations, adds more readable info
  getPresentedConfirmed(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getPresentedConfirmed(id)
        .subscribe( (results) => {
          // ADD MORE READABLE INFO HERE

          this.presented_confirmed = results;
          this.num_presented_confirmed = this.presented_confirmed.length;
        
        });
  }

  // gets collection of Presentations, adds more readable info
  getPresentedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getPresentedPending(id)
        .subscribe( (results) => {
          // ADD MORE READABLE INFO HERE

          this.presented_pending = results;
          this.num_presented_pending = this.presented_pending.length;
        });
  }

  // gets collection of Presentations, adds more readable info
  getListenedConfirmed(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getListenedConfirmed(id)
        .subscribe( (results) => {
          // ADD MORE READABLE INFO HERE

          this.listened_confirmed = results;
          this.num_listened_confirmed = this.listened_confirmed.length;
        });
  }

  // gets collection of Presentations, adds more readable info
  getListenedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getListenedPending(id)
        .subscribe( (results) => {
          // ADD MORE READABLE INFO HERE

          this.listened_pending = results;
          this.num_listened_pending = this.listened_pending.length;
        });
  }

}





