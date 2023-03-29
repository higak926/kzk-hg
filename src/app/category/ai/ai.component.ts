import { Component, OnInit } from '@angular/core';

import { PlayingManagerService } from 'src/app/services/playing-manager.service';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { PlayingManagerType } from 'src/app/enums';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss'],
})
export class AiComponent implements OnInit {
  imageFilePath = 'assets/images/my_favorite/ai.png';
  constructor(
    private playingManagerService: PlayingManagerService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  ngOnInit(): void {
    // 初回表示の場合、表示回数を更新
    if (
      this.playingManagerQuery.getValue().displayedAi ===
      PlayingManagerType.NONE_DISPLAYED_NUMBER
    ) {
      this.playingManagerService.setDisplayedAi(
        this.playingManagerQuery.getValue().displayedAi + 1
      );
    }
  }
}
