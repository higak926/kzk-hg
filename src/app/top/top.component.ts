import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

import { IntroDisplayService } from 'src/app/services/intro-display.service';
import { IntroDisplayType } from '../enums';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  introDisplayed: boolean = false;
  swiperConfig: SwiperOptions = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 800,
    loop: true,
    effect: 'fade',
    grabCursor: true,
    fadeEffect: {
      crossFade: true,
    },
  };
  introPath = 'assets/images/intro.gif';
  imagePath = 'assets/images/my_favorite/';
  myFavoriteImages = [
    { name: 'web.png' },
    { name: 'soccer.png' },
    { name: 'big_data.png' },
    { name: 'coding.png' },
    { name: 'math.png' },
    { name: 'economy.png' },
    { name: 'ai.png' },
    { name: 'my_favorite.png' },
  ];

  constructor(private introDisplayService: IntroDisplayService) {}

  ngOnInit(): void {
    this.introDisplayed =
      this.introDisplayService.getDisplayed() === IntroDisplayType.DISPLAYED;
    if (!this.introDisplayed) {
      setTimeout(() => {
        this.introDisplayService.setDisplayed(IntroDisplayType.DISPLAYED);
        this.introDisplayed = true;
      }, 12000);
    }
  }
}
