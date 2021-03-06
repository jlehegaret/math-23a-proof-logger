// This users service translates a component's CRUD requests
//   re: user-related data into the proper API
//   call expected by the back-end, and returns the JSON results
//   to the requester.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class UserService {

    private apiUrl = environment.apiUrl;

    constructor(private http:HttpClient) {}

    listUsers() {
        return this.http.get(this.apiUrl + "/users");
    }

    //TODO:
    //listUsersStaffOnly() {
    //    return this.http.get(this.apiUrl + "/users/staff");
    //}

    getUser(id:string) {
        return this.http.get(this.apiUrl + "/users/" + id);
    }

    addUser(email:string, status:string) {
        return this.http.post(this.apiUrl + "/users", 
                             {'email': email, 'status':status});
    }

    updateUser(id:string, user:any) {
        return this.http.put(this.apiUrl + "/users/" + id,
                    {'id': id, 'email': user.email, 
                     'status': user.status, 
                     'availability': user.availability });
    }

    deleteUser(id:string) {
        return this.http.delete(this.apiUrl + "/users/" + id);
    }

}