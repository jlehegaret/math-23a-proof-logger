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

    userList = null;
    numUsers = 0;
    adding:boolean=false;

    ngOnInit() {
        this.updateUserList();
    }

    setAddUserMode(mode):void {
console.log("Setting setAddUserMode to " + mode);
        this.adding = (mode ? true : false);
    }

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
    }

}