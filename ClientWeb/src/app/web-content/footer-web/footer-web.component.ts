import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-web',
  templateUrl: './footer-web.component.html',
  styleUrls: ['./footer-web.component.css']
})
export class FooterWebComponent implements OnInit {
  lat = -17.376173;
  lng = -66.17378415;
  
  constructor() { }

  ngOnInit() {
  }

}
