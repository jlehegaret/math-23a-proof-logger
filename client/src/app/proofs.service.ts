import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ProofService {

    private apiUrl = environment.apiUrl;

    constructor(private http:HttpClient) {}

    listProofs() {
        return this.http.get(this.apiUrl + "/proofs");
    }
}