import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';

import { IntroDisplayService } from 'src/app/services/intro-display.service';
import { IntroDisplayType, Path } from 'src/app/enums';

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
  myFavoriteCategory = [
    { name: 'Web' },
    { name: 'Soccer' },
    { name: 'Big Data' },
    { name: 'Coding' },
    { name: 'Math' },
    { name: 'Economy' },
    { name: 'AI' },
  ];

  constructor(
    private introDisplayService: IntroDisplayService,
    private router: Router
  ) {}

  /**
   * onInit
   */
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

  /**
   * To Category
   * @param string
   */
  toCategory(category: string): void {
    switch (category) {
      case 'Web':
        this.router.navigate([Path.CATEGORY_WEB]);
        break;
      case 'Soccer':
        this.router.navigate([Path.CATEGORY_SOCCER]);
        break;
      case 'Big Data':
        this.router.navigate([Path.CATEGORY_BIG_DATA]);
        break;
      case 'Coding':
        this.router.navigate([Path.CATEGORY_CODING]);
        break;
      case 'Math':
        this.router.navigate([Path.CATEGORY_MATH]);
        break;
      case 'Economy':
        this.router.navigate([Path.CATEGORY_ECONOMY]);
        break;
      case 'AI':
        this.router.navigate([Path.CATEGORY_AI]);
        break;
      default:
        break;
    }
  }
}
