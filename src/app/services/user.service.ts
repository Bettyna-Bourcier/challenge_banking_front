import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    private apiUrl: String;

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
            this.apiUrl = environment.apiUrl;
    }

    getUserByClientNumber(): Observable<User> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get user and its outgoings by its client number
        return this.http.get(this.apiUrl + '/me', options)
            .map((response: Response) => response.json());
    }
}
