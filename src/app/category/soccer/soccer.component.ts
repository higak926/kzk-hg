import { Component, OnInit } from '@angular/core';

import { PlayingManagerService } from 'src/app/services/playing-manager.service';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { PlayingManagerType } from 'src/app/enums';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss'],
})
export class SoccerComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/soccer.png';
  constructor(
    private playingManagerService: PlayingManagerService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  ngOnInit(): void {
    // 初回表示の場合、表示回数を更新
    if (
      this.playingManagerQuery.getValue().displayedSoccer ===
      PlayingManagerType.NONE_DISPLAYED_NUMBER
    ) {
      this.playingManagerService.setDisplayedSoccer(
        this.playingManagerQuery.getValue().displayedSoccer + 1
      );
    }
  }
}
