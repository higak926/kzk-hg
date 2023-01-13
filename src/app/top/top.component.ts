import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
