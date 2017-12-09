import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';
import { OutgoingsComponent } from './outgoings/outgoings.component';
import { UserService } from './services/user.service';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OutgoingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
