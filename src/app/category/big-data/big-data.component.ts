import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-data',
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.scss'],
})
export class BigDataComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/big_data.png';
  constructor() {}

  ngOnInit(): void {}
}
