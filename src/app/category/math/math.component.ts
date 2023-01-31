import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
})
export class MathComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/math.png';
  constructor() {}

  ngOnInit(): void {}
}
