import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/inicio', title: 'Presentación',  icon: 'ui-1_simple-add', class: '' },
  { path: '/servicos', title: 'Servicios',  icon: 'design_bullet-list-67', class: '' },
  { path: '/intalaciones', title: 'Instalaciones',  icon: 'design_bullet-list-67', class: '' },
  { path: '/admisiones', title: 'Admisiones',  icon: 'design_bullet-list-67', class: '' },
  { path: '/plantel', title: 'Plantel Administrativo',  icon: 'design_bullet-list-67', class: '' },
  { path: '/contacto', title: 'Contacto',  icon: 'design_bullet-list-67', class: '' },
  { path: '/iniciar', title: 'Iniciar Sesion',  icon: 'design_bullet-list-67', class: '' },
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
