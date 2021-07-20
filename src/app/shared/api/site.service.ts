import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Contactus} from "../interfaces/contactus";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SiteService {
    constructor(
        private http: HttpClient,
    ) { }

    /**
     * Returns contactUS object
     */
    getContactUs(): Observable<Contactus[]> {
        return this.http.get<Contactus[]>(`${environment.apiUrl}/api/contact-us`);
    }

    /**
     * Return Term & Conditions
     */
    getTermsConditions(): Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}/api/terms-conditions`);
    }
}
