import { Query } from '@datorama/akita';
import { PlayingManagerStore } from 'src/app/stores/playing-manager.store';
import { PlayingManager } from 'src/app/models/playing-manager.model';
import { Injectable } from '@angular/core';

/**
 * Playing管理 Query
 */
@Injectable({
  providedIn: 'root',
})
export class PlayingManagerQuery extends Query<PlayingManager> {
  constructor(protected override store: PlayingManagerStore) {
    super(store);
  }
}
