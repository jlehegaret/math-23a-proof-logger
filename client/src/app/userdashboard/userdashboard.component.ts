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
  proofs:any;        // list of all class proofs
  staff:any;         // list of class staff (who are always listeners)
  //qualListeners:any; // TODO: add student listeners onto staff options
  adding:boolean=false;

  // this user's presented & confirmed pres.
  presented_confirmed:any; 
  num_presented_confirmed = 0;
 
  // this user's presented & denied pres.
  presented_denied:any; 
  num_presented_denied = 0;

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
    this.updateListenedConfirmed();
    this.updateListenedPending();

    // actually only needed for students - TODO: "if"
    this.updateProofs();
    this.updateStaff();
    this.updatePresentedConfirmed();
    this.updatePresentedDenied();
    this.updatePresentedPending();

  }

  setAdding(mode):void{
      this.adding = (mode ? true : false);
  }

  // reads URL to get correct user's info
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
          this.listened_confirmed.sort(this.sortByPresenter);
          this.num_listened_confirmed = this.listened_confirmed.length;
        });
  }

  // gets collection of Presentations
  updateListenedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getListenedPending(id)
        .subscribe( (results) => {
          this.listened_pending = results;
          this.listened_pending.sort(this.sortByPresenter);
          this.num_listened_pending = this.listened_pending.length;
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
          this.proofs.sort(this.sortByProof);
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
          this.presented_confirmed.sort(this.sortByProof);
          this.num_presented_confirmed = this.presented_confirmed.length;
        });
  }

  // gets collection of Presentations
  updatePresentedDenied(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService
        .getPresentedDenied(id)
        .subscribe( (results) => {
          this.presented_denied = results;
          this.presented_denied.sort(this.sortByProof);
          this.num_presented_denied = this.presented_denied.length;
        });
  }

  // gets collection of Presentations
  updatePresentedPending(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.presentationService.getPresentedPending(id)
        .subscribe( (results) => {
          this.presented_pending = results;
          this.presented_pending.sort(this.sortByProof);
          this.num_presented_pending = this.presented_pending.length;
        });
  }

  // updates presented group and proofs list when a new pres is registered
  updatePresented() : void {
      this.updatePresentedPending();
      this.updateProofs();
  }

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





