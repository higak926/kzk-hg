import { Component, OnInit } from '@angular/core';

import { PlayingManagerService } from 'src/app/services/playing-manager.service';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { PlayingManagerType } from 'src/app/enums';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss'],
})
export class MathComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/math.png';
  constructor(
    private playingManagerService: PlayingManagerService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  ngOnInit(): void {
    // 初回表示の場合、表示回数を更新
    if (
      this.playingManagerQuery.getValue().displayedMath ===
      PlayingManagerType.NONE_DISPLAYED_NUMBER
    ) {
      this.playingManagerService.setDisplayedMath(
        this.playingManagerQuery.getValue().displayedMath + 1
      );
    }
  }
}
