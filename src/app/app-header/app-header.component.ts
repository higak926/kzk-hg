import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(public router: Router) {}
  imgSrc: string = 'assets/images/header-logo.png';
  topPath: string = '/top';

  ngOnInit(): void {}

  toTop(): void {
    if (this.router.url !== this.topPath) {
      this.router.navigate([this.topPath]);
    }
  }
}
