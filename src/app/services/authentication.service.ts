import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    public token: string;
    private apiUrl: String;

    constructor(private http: Http) {
        // Set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.apiUrl = environment.apiUrl;
    }

    login(clientNumber: string, password: string): Observable<boolean> {
        return this.http.post(this.apiUrl + '/authenticate', JSON.stringify({ clientNumber: clientNumber, password: password }))
            .map((response: Response) => {
                const headers = response.headers;
                // Get token from authorization header
                let token = headers.get('Authorization'); 
                token = token.replace('Bearer ', '');
                if (token) {
                    this.token = token;
                    // Store clientNumber and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ clientNumber: clientNumber, token: token }));
                    // Return true to indicate successful login
                    return true;
                } else {
                    // Return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // Clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}