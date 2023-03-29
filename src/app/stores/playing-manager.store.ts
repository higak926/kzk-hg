import { Store, StoreConfig } from '@datorama/akita';
import { PlayingManager } from 'src/app/models/playing-manager.model';
import { PlayingManagerType } from 'src/app/enums';
import { Injectable } from '@angular/core';

/**
 * Playing管理 Store
 * @return PlayingManager型
 */
export function createInitialState(): PlayingManager {
  // 表示回数 初期化
  return {
    displayedTop: PlayingManagerType.NONE_DISPLAYED_NUMBER,
    displayedWeb: PlayingManagerType.NONE_DISPLAYED_NUMBER,
    displayedSoccer: PlayingManagerType.NONE_DISPLAYED_NUMBER,
    displayedBigData: PlayingManagerType.NONE_DISPLAYED_NUMBER,
    displayedCoding: PlayingManagerType.NONE_DISPLAYED_NUMBER,
    displayedMath: PlayingManagerType.NONE_DISPLAYED_NUMBER,
    displayedEconomy: PlayingManagerType.NONE_DISPLAYED_NUMBER,
    displayedAi: PlayingManagerType.NONE_DISPLAYED_NUMBER,
  };
}

/**
 * Playing管理 Store
 */
@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'playing-manager' })
export class PlayingManagerStore extends Store<PlayingManager> {
  constructor() {
    super(createInitialState());
  }
}
