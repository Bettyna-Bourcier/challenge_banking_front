import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { OutgoingsComponent } from './outgoings/outgoings.component';

const appRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'me', 
        component: OutgoingsComponent,
        canActivate: [AuthGuard]
    },
    // Otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);