import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';

import { IntroDisplayService } from 'src/app/services/intro-display.service';
import { PlayingManagerService } from 'src/app/services/playing-manager.service';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { IntroDisplayType, Path, PlayingManagerType } from 'src/app/enums';

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
    private router: Router,
    private playingManagerService: PlayingManagerService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  /**
   * onInit
   */
  ngOnInit(): void {
    // 初回表示済みフラグ セット
    this.introDisplayed =
      this.introDisplayService.getDisplayed() === IntroDisplayType.DISPLAYED;
    // 初回表示の場合、welcome gifを表示
    if (!this.introDisplayed) {
      setTimeout(() => {
        this.introDisplayService.setDisplayed(IntroDisplayType.DISPLAYED);
        this.introDisplayed = true;
      }, 12000);
    }

    // 初回表示の場合、表示回数を更新
    if (
      this.playingManagerQuery.getValue().displayedTop ===
      PlayingManagerType.NONE_DISPLAYED_NUMBER
    ) {
      this.playingManagerService.setDisplayedTop(
        this.playingManagerQuery.getValue().displayedTop + 1
      );
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
