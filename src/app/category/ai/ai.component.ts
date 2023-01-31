import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss'],
})
export class AiComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/ai.png';
  constructor() {}

  ngOnInit(): void {}
}
