import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RoleGuard } from './service/role-guard-service';
import { AuthGuard } from './service/auth.guard';
import { UserMamangementComponent } from './components/user-mamangement/user-mamangement.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { QaInterfaceComponent } from './components/qa-interface/qa-interface.component';
import { ReportComponent } from './components/report/report.component';
import { IngastoinMenagementComponent } from './components/ingastoin-menagement/ingastoin-menagement.component';
import { NoAccessComponent } from './components/no-access/no-access.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full',  redirectTo: '/login',},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: MainNavComponent,
      children: [
        { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
        { path: "user-management", component: UserMamangementComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['admin']}},
        { path: "document-upload", component: DocumentUploadComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['support', 'admin']}},
        { path: "ingestion-management", component: IngastoinMenagementComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['support', 'user', 'admin']}},
        { path: "qa-interface", component: QaInterfaceComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['support', 'user', 'admin']}},
        { path: "user-profile", component: UserProfileComponent, canActivate: [AuthGuard, RoleGuard], data: {roles: ['support', 'user', 'admin']}},
        {path: "**", component: NoAccessComponent}
      ]
    },
  // {path: 'dashboard', component: MainNavComponent}
];
