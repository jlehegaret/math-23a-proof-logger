// This component presents all of a user's presentations
//   to that user, broken down by status, and provides
//   CRUD functionality re: presentations associated with
//   that user.

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

  // placeholder containers for data to be fetched from various services
  user:any = {'email': ''};    // current user
  proofs:any;                  // list of all class proofs
  staff:any;           // TODO: list of class staff (who are always listeners)
                       // currently, this is simply populated with ALL users
  //qualListeners:any; // TODO: add student listeners onto staff options

  // user's display option re: adding new presentation or not
  adding:boolean=false;

  // this user's presented & confirmed pres. (to be filled in via service)
  presented_confirmed:any; 
  num_presented_confirmed = 0;
 
  // this user's presented & denied pres. (to be filled in via service)
  presented_denied:any; 
  num_presented_denied = 0;

  // this user's presented & pending pres. (to be filled in via service)
  presented_pending:any; 
  num_presented_pending = 0;

  // this user's confirmed listened-to pres.  (to be filled in via service)
  listened_confirmed:any;  
  num_listened_confirmed = 0;

  // this user's pending listened-to pres. (to be filled in via service)
  listened_pending:any;   
  num_listened_pending = 0;

  // collects data for any new presentation registered by user
  new_presentation = {};

  // retrieve all information re: current user, class proofs, 
  //   and presentations for current user
  // TODO:  alter calls based on current user's status
  ngOnInit() {  
    this.getUser(); 
    this.updateListenedConfirmed();
    this.updateListenedPending();

    // actually only needed for students - TODO: "if"
    this.updateProofs();
    this.updateStaff();
    this.updatePresentedConfirmed();
    this.updatePresentedDenied();
    this.updatePresentedPending();

  }

  // set user's display preference
  setAdding(mode):void{
      this.adding = (mode ? true : false);
  }

  // read URL to get current user's id,
  //   retrieve user's data from user service
  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
        .subscribe( (user) => {
          this.user = user;
        });
  }

  // FOR ALL USERS

  // gets collection of Presentations
  updateListenedConfirmed(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getListenedConfirmed(id)
        .subscribe( (results) => {
          this.listened_confirmed = results;
          this.num_listened_confirmed = this.listened_confirmed.length;
          if (this.num_listened_confirmed) {
            this.listened_confirmed.sort(this.sortByPresenter);
          }
        });
  }

  // gets collection of Presentations
  updateListenedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getListenedPending(id)
        .subscribe( (results) => {
          this.listened_pending = results;
          this.num_listened_pending = this.listened_pending.length;
          if (this.num_listened_pending) {
            this.listened_pending.sort(this.sortByPresenter);
          }
        });
  }

  // updates both listening groups when a listen is confirmed
  updateListened() : void {
      this.updateListenedPending();
      this.updateListenedConfirmed();
  }

  // FOR STUDENTS ONLY

  // gets collection of Proofs - TODO: filter out already-presented ones
  updateProofs(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.proofService.listProofs()
        .subscribe( (proofs) => {
          this.proofs = proofs;
        });
  }

  // gets collection of staff, who can always listen to any proof
  // TODO: make an API-side staff-only call
  updateStaff(): void {
    this.userService.listUsers()
        .subscribe( (users) => {
          this.staff = users;
          this.staff.sort(this.sortByEmail);
        });
  }

  // gets collection of Presentations
  updatePresentedConfirmed(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService
        .getPresentedConfirmed(id)
        .subscribe( (results) => {
          this.presented_confirmed = results;
          this.num_presented_confirmed = this.presented_confirmed.length;
          if (this.num_presented_confirmed) {
            this.presented_confirmed.sort(this.sortByProof);
          }
        });
  }

  // gets collection of Presentations
  updatePresentedDenied(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService
        .getPresentedDenied(id)
        .subscribe( (results) => {
          this.presented_denied = results;
          this.num_presented_denied = this.presented_denied.length;
          if (this.num_presented_denied) {
            this.presented_denied.sort(this.sortByProof);
          }
        });
  }

  // gets collection of Presentations
  updatePresentedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getPresentedPending(id)
        .subscribe( (results) => {
          this.presented_pending = results;
          this.num_presented_pending = this.presented_pending.length;
          if (this.num_presented_pending) {
            this.presented_pending.sort(this.sortByProof);
          }
        });
  }

  // updates presented group and proofs list when a new pres is registered
  updatePresented() : void {
      this.updatePresentedPending();
      this.updateProofs();
  }

  // SORTING FUNCTIONS used by above collections, to optimize
  //   display of presentation lists depending on status

  sortByEmail(a:any, b:any):number {      
      if ( a.email.substring(0, a.email.lastIndexOf("@")) 
            < b.email.substring(0, b.email.lastIndexOf("@")) ) {
          return -1;
      } else { 
          return 1; 
      }
  }

  sortByPresenter(a:any, b:any):number {
      let e1 = a.presenter.email;
      let e2 = b.presenter.email;         
      if (e1 == e2) {
        if (a.proof.name < b.proof.name) {
            return -1;
        } else { 
            return 1; 
        }
      } else {
        if (e1.substring(0, e1.lastIndexOf("@")) 
              < e2.substring(0, e2.lastIndexOf("@"))) {
            return -1;
        } else { 
            return 1; 
        }
      }
  }

  sortByProof(a:any, b:any):number {
      let p1 = a.proof.name;
      let p2 = b.proof.name; 
      if (p1 == p2) {
          if (a.listener.email < b.listener.email) {
              return -1;
          } else { 
              return 1; 
          }
      } else {        
          if (p1 < p2) {
              return -1;
          } else { 
              return 1; 
          }
      }
  }
}





