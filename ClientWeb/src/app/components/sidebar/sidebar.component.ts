import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Registro',  icon: 'ui-1_simple-add', class: '' },
    { path: '/table-list', title: 'Agisnacion de Materias',  icon: 'design_vector', class: '' },
    { path: '/typography', title: 'Informes de Actividad',  icon: 'design_bullet-list-67', class: '' },
    { path: '/icons', title: 'Notificaciones',  icon: 'ui-1_bell-53', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon: 'users_single-02', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  }
}
