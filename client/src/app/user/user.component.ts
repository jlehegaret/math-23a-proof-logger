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

    // When a user is deleted, send event to parent to refresh list
    @Output() deletedUser = new EventEmitter();

    editing:boolean=false;

    constructor(private userService: UserService) {}

    ngOnInit() {}

    setEditMode(mode):void{
        this.editing = (mode ? true : false);
    }

    updateUser(obj:any):void {
        this.user.status = obj.statusField;
        this.user.email = obj.emailField;
        this.user.availability = obj.availabilityField;
        this.userService.updateUser(this.user._id, this.user)
      .     subscribe((result)=>{
                this.setEditMode(false);
            });
    }

    // deletes user using UserService, notifies parent component
    deleteUser() {
        this.userService.deleteUser(this.user._id)
            .subscribe((result)=>{
                this.deletedUser.emit();
                this.setEditMode(false);
        });
    }
}
