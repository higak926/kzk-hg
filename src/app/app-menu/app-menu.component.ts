import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  constructor() {}
  myFavoriteCategory = [
    { name: 'Web' },
    { name: 'Soccer' },
    { name: 'Big Data' },
    { name: 'Coding' },
    { name: 'Math' },
    { name: 'Economy' },
    { name: 'AI' },
  ];

  ngOnInit(): void {}
}
