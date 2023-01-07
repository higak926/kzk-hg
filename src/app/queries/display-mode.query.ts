import { Query } from '@datorama/akita';
import { DisplayModeStore } from 'src/app/stores/display-mode.store';
import { DisplayMode } from 'src/app/models/display-mode.model';
import { Injectable } from '@angular/core';

/**
 * 表示モード Query
 */
@Injectable({
  providedIn: 'root',
})
export class DisplayModeQuery extends Query<DisplayMode> {
  constructor(protected override store: DisplayModeStore) {
    super(store);
  }
}
