import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Inicio',  icon: 'ui-1_simple-add', class: '' },
  { path: '/contact', title: 'Contactenos',  icon: 'design_vector', class: '' },
  { path: '/login', title: 'Iniciar Sesion',  icon: 'design_bullet-list-67', class: '' },
];

@Component({
  selector: 'app-navbar-web',
  templateUrl: './navbar-web.component.html',
  styleUrls: ['./navbar-web.component.css']
})
export class NavbarWebComponent implements OnInit {
  menuItems: any[];
  titleSchool: string;
  isNavbarCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.titleSchool = 'Colegio'
  }

  isMobileMenu() {
    if ( window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
