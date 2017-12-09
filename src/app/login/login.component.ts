import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loading = false;
  error = '';

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.user.clientNumber, this.user.password)
          .subscribe(result => {
              if (result === true) {
                  // Redirect to /me is user is logged
                  this.router.navigate(['/me']);
              } else {
                  this.error = 'Client number or password is incorrect';
                  this.loading = false;
              }
          });
  }

}
