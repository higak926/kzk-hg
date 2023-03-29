import { Component, OnInit } from '@angular/core';

import { PlayingManagerService } from 'src/app/services/playing-manager.service';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { PlayingManagerType } from 'src/app/enums';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss'],
})
export class CodingComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/coding.png';
  constructor(
    private playingManagerService: PlayingManagerService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  ngOnInit(): void {
    // 初回表示の場合、表示回数を更新
    if (
      this.playingManagerQuery.getValue().displayedCoding ===
      PlayingManagerType.NONE_DISPLAYED_NUMBER
    ) {
      this.playingManagerService.setDisplayedCoding(
        this.playingManagerQuery.getValue().displayedCoding + 1
      );
    }
  }
}
