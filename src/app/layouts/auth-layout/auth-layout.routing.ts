import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/auth-pages/login/login.component';
import { RegisterComponent } from '../../pages/auth-pages/register/register.component';
import { LoggedInGuard } from 'src/app/auth/logged-in.guard';
import { ForgotPasswordComponent } from 'src/app/pages/auth-pages/forgot-password/forgot-password.component';
import { SavePasswordComponent } from 'src/app/pages/auth-pages/save-password/save-password.component';
import { EmployeeUpdateOnboardComponent } from 'src/app/pages/auth-pages/employee-update-onboard/employee-update-onboard/employee-update-onboard.component';
import { AuthguardGuard } from 'src/app/auth/authguard.guard';
import { EmployeeWaitingComponent } from 'src/app/pages/auth-pages/employee-waiting/employee-waiting/employee-waiting.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent, canActivate:[LoggedInGuard] },
    { path: 'register',       component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent , canActivate:[LoggedInGuard] },
    { path:'save-password',component:SavePasswordComponent,canActivate:[LoggedInGuard]},
    {path:"onBoard-updating",component:EmployeeUpdateOnboardComponent},
    {path:"waiting-for-hr-approval",component:EmployeeWaitingComponent},
];
