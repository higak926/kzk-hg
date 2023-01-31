import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss'],
})
export class SoccerComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/soccer.png';
  constructor() {}

  ngOnInit(): void {}
}
