import { Query } from '@datorama/akita';
import { IntroDisplayStore } from 'src/app/stores/intro-display.store';
import { IntroDisplay } from 'src/app/models/intro-display.model';
import { Injectable } from '@angular/core';

/**
 * 初回表示制御 Query
 */
@Injectable({
  providedIn: 'root',
})
export class IntroDisplayQuery extends Query<IntroDisplay> {
  constructor(protected override store: IntroDisplayStore) {
    super(store);
  }
}
