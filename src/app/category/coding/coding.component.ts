import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss'],
})
export class CodingComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/coding.png';
  constructor() {}

  ngOnInit(): void {}
}
