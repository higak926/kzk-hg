import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor() {}
  imgSrc: string = 'assets/images/header-logo.png';
  topPath: string = '/top';

  ngOnInit(): void {}

  toTop(): void {}
}
