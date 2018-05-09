// This proofs service translates a component's CRUD requests
//   re: proof-related data into the proper API
//   call expected by the back-end, and returns the JSON results
//   to the requester.

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

    getProof(id:string) {
        return this.http.get(this.apiUrl + "/proofs/" + id);
    }

    addProof(name:string) {
        return this.http.post(this.apiUrl + "/proofs", 
                             {'proof': name});
    }

    updateProof(id:string, name:string) {
        return this.http.put(this.apiUrl + "/proofs/" + id,
                    {'id': id, 'proof': name });
    }

    deleteProof(id:string) {
        return this.http.delete(this.apiUrl + "/proofs/" + id);
    }

    // remove a qualified listener from a proof
    deleteListener(proofID:string, userID:string) {
        return this.http.delete(this.apiUrl + "/proofs/" 
            + proofID + '/listeners/' + userID);
    }
}