// This component allows a staff member to add more users
//  of Proof Logger to the system

import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
  providers: [UserService]
})

export class NewUserComponent implements OnInit {

  // When a new user is created, send event to parent to refresh list
  @Output() newUser = new EventEmitter();

  // When a new user is cancelled, send event to parent to refresh form
  @Output() cancelNewUserEv = new EventEmitter();

  // user object, bound to the form fields
  user:any = {}

  constructor(private userService:UserService) { }

  ngOnInit() {}

  // newuser html form triggers this event via submit
  save(form) : void {

      // add user, then notify parent of updated list
      this.userService.addUser(this.user.email, this.user.status)
          .subscribe((user)=>{
            this.newUser.emit();
            form.reset();
        });
  }

  // html form triggers this event via Cancel button
  cancelNewUser(form) : void {
      this.cancelNewUserEv.emit();
      form.reset();
  }
}
