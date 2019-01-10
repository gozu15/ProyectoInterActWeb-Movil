import { Routes } from '@angular/router';

import { LoginComponent } from 'src/app/web-content/login/login.component';
import { HomeComponent } from 'src/app/web-content/home/home.component';
import { ContactComponent } from 'src/app/web-content/contact/contact.component';
import { PanelAdminComponent } from 'src/app/web-content/panel-admin/panel-admin.component';

export const WebLayoutRoutes: Routes = [
    { path: 'inicio',      component: HomeComponent },
    { path: 'contacto',    component: ContactComponent },
    { path: 'iniciar',     component: LoginComponent },
    { path: 'plantel',     component: PanelAdminComponent},
];
