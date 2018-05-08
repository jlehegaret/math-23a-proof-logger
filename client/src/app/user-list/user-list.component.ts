// This component is the gateway to all CRUD functionalty
//   for Proof Logger's user list

import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})


export class UserListComponent implements OnInit {

    constructor(private userService:UserService) {}

    // initial list of users, until populated by service
    userList = null;
    numUsers = 0;

    // user display option
    adding:boolean=false;

    ngOnInit() {
        // call service to obtain all user data
        this.updateUserList();
    }

    // change user's display preference
    setAddUserMode(mode):void {
        this.adding = (mode ? true : false);
    }

    // call service to obtain all user data
    //  ensure that users are sorted first by
    //    class status, then by email address
    updateUserList():void {
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
        this.setAddUserMode(false);
    }

}