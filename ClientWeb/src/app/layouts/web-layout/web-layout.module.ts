import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { WebLayoutRoutes } from './web-layout.routing';
import { LoginComponent } from 'src/app/web-content/login/login.component';
import { FooterWebComponent } from 'src/app/web-content/footer-web/footer-web.component';
import { NavbarWebComponent } from 'src/app/web-content/navbar-web/navbar-web.component';
import { HomeComponent } from 'src/app/web-content/home/home.component';
import { ContactComponent } from 'src/app/web-content/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WebLayoutRoutes),
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    }),
  ],
  declarations: [
    NavbarWebComponent,
    FooterWebComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
  ]
})

export class WebLayoutModule {}
