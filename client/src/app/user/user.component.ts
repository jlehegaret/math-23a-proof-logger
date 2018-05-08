// This component is used to present a specific user's information
//   and to provide RUD functionality on that user's record
//   (not CRUD - the C is handled via the "newuser" component).

import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [UserService]

})

export class UserComponent implements OnInit {

    @Input() user; // from app-user tag in app.component.html

    // When a user is deleted, send event to parent to refresh parent
    @Output() deletedUser = new EventEmitter();

    // user's display preference
    editing:boolean=false;

    constructor(private userService: UserService) {}

    ngOnInit() {}

    // set user's display preference
    setEditMode(mode):void{
        this.editing = (mode ? true : false);
    }

    // change user's information by calling service,
    //   notify parent
    updateUser(obj:any):void {
        this.user.status = obj.statusField;
        this.user.email = obj.emailField;
        this.user.availability = obj.availabilityField;
        this.userService.updateUser(this.user._id, this.user)
      .     subscribe((result)=>{
                this.setEditMode(false);
            });
    }

    // delete user using user service, notify parent component
    deleteUser() {
        this.userService.deleteUser(this.user._id)
            .subscribe((result)=>{
                this.deletedUser.emit();
                this.setEditMode(false);
        });
    }
}
