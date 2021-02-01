import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-back-carousal',
  templateUrl: './back-carousal.component.html',
  styleUrls: ['./back-carousal.component.css'],
  providers: [NgbCarouselConfig]
})
export class BackCarousalComponent implements OnInit {

  constructor(config:NgbCarouselConfig) { 
    config.interval=4000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=false;
    config.showNavigationArrows=true;
    config.showNavigationIndicators=true;
  }

  ngOnInit() {
  }

  
}

