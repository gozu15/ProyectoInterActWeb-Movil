import { Routes } from '@angular/router';

import { LoginComponent } from 'src/app/web-content/login/login.component';
import { HomeComponent } from 'src/app/web-content/home/home.component';
import { ContactComponent } from 'src/app/web-content/contact/contact.component';

export const WebLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'contact',   component: ContactComponent },
    { path: 'login',     component: LoginComponent },
];
