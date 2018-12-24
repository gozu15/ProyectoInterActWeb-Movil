import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  constructor() { }

  lat = -17.376173;
  lng = -66.17378415;
  ngOnInit() {
  }

}
