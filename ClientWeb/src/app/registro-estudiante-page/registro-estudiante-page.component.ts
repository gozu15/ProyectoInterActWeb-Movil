import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-estudiante-page',
  templateUrl: './registro-estudiante-page.component.html',
  styleUrls: ['./registro-estudiante-page.component.css']
})
export class RegistroEstudiantePageComponent implements OnInit {
  public isCollapsed = true;
  model;
  constructor() { }

  ngOnInit() {
  }

}
