import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/inicio', title: 'Presentación',  icon: '', class: '' },
  { path: '/servicios', title: 'Servicios',  icon: '', class: '' },
  { path: '/adminservice', title: 'Administrar Servicio',  icon: '', class: '' },
  { path: '/contacto', title: 'Contacto',  icon: '', class: '' },
  { path: '/iniciar', title: 'Iniciar Sesion',  icon: '', class: '' },
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
