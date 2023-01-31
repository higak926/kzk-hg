import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/web.png';
  constructor() {}

  ngOnInit(): void {}
}
