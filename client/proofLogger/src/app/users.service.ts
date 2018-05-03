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
}