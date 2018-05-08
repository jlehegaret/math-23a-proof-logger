import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class PresentationService {

    private apiUrl = environment.apiUrl;

    constructor(private http:HttpClient) {}

    listPresentations() {
        return this.http.get(this.apiUrl + "/presentations");
    }

    getPresentedPending(id:string) {
        return this.http.get(this.apiUrl 
            + "/presentations/presentedpending/user/" + id);
    }

    getPresentedConfirmed(id:string) {
        return this.http.get(this.apiUrl 
            + "/presentations/presentedconfirmed/user/" + id);
    }

    getPresentedDenied(id:string) {
        return this.http.get(this.apiUrl 
            + "/presentations/presenteddenied/user/" + id);
    }

    getListenedPending(id:string) {
        return this.http.get(this.apiUrl 
            + "/presentations/listenedpending/user/" + id);
    }

    getListenedConfirmed(id:string) {
        return this.http.get(this.apiUrl 
            + "/presentations/listenedconfirmed/user/" + id);
    }

    getPresentation(id:string) {
        return this.http.get(this.apiUrl + "/presentations/" + id);
    }

    addPresentation(presenterID:string, listenerID:string, 
                    proofID:string) {
        return this.http.post(this.apiUrl + "/presentations", 
                    {'presenterID' : presenterID, 
                     'listenerID' : listenerID, 
                     'proofID' : proofID});
    }

    updatePresentation(id:string, status:string) {
        return this.http.put(this.apiUrl + "/presentations/" + id,
                    {'status': status });
    }

    deletePresentation(id:string) {
        return this.http.delete(this.apiUrl + "/presentations/" + id);
    }
}