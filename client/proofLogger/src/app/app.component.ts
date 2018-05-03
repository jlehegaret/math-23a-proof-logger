import { Component, OnInit } from '@angular/core';
import { ProofService } from './proofs.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProofService, UserService]
})
export class AppComponent {
  
    constructor(private proofService:ProofService, private userService:UserService) {}

    coursename = "Math 23A";
    proofList = null;
    userList = null;
    numProofs = 0;
    numUsers = 0;

    ngOnInit() {
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

        this.userService.listUsers().subscribe( 
            (users) => {
                this.userList = users;
                this.userList.sort( 
                    (a, b) => {
                        if (a.status == b.status) {
                            if (a.email.substring(0, a.email.lastIndexOf("@")) < b.email.substring(0, b.email.lastIndexOf("@"))) {
                                return -1;
                            } else {
                                return 1;
                            }
                        } else if (a.status == "Head") {
                                return -1;
                        } else if (b.status == "Head") {
                                return 1;
                        } else if (a.status == "TA") {
                                return -1;
                        } else if (b.status == "TA") {
                                return 1;
                        }
                });
                this.numUsers = this.userList.length;
        });

    }

}
