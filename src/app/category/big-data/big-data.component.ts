import { Component, OnInit } from '@angular/core';

import { PlayingManagerService } from 'src/app/services/playing-manager.service';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { PlayingManagerType } from 'src/app/enums';

@Component({
  selector: 'app-big-data',
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.scss'],
})
export class BigDataComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/big_data.png';
  constructor(
    private playingManagerService: PlayingManagerService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  ngOnInit(): void {
    // 初回表示の場合、表示回数を更新
    if (
      this.playingManagerQuery.getValue().displayedBigData ===
      PlayingManagerType.NONE_DISPLAYED_NUMBER
    ) {
      this.playingManagerService.setDisplayedBigData(
        this.playingManagerQuery.getValue().displayedBigData + 1
      );
    }
  }
}
