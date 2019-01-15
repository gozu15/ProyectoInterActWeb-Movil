import { Routes } from '@angular/router';

import { LoginComponent } from 'src/app/web-content/login/login.component';
import { HomeComponent } from 'src/app/web-content/home/home.component';
import { ContactComponent } from 'src/app/web-content/contact/contact.component';
import { Component } from '@angular/core';
import { ServicesComponent } from 'src/app/web-content/services/services.component';
import { AdminServicesComponent } from 'src/app/web-content/admin-services/admin-services.component';

export const WebLayoutRoutes: Routes = [
    { path: 'inicio',           component: HomeComponent },
    { path: 'contacto',         component: ContactComponent },
    { path: 'iniciar',          component: LoginComponent },
    { path: 'adminservice',     component: AdminServicesComponent},
    { path: 'servicios',        component: ServicesComponent}
];
