import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss'],
})
export class EconomyComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/economy.png';
  constructor() {}

  ngOnInit(): void {}
}
