import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `../../../assets/img/banners/col${Math.floor(Math.random() * 4) + 1}.jpg`);

  constructor(config: NgbCarouselConfig) {
    this.settingCaroucel(config);
   }

  ngOnInit() {
  }

  settingCaroucel (config){
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
