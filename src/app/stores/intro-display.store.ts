import { Store, StoreConfig } from '@datorama/akita';
import { IntroDisplay } from 'src/app/models/intro-display.model';
import { IntroDisplayType } from 'src/app/enums';
import { Injectable } from '@angular/core';

/**
 * 初回表示制御 Store
 * @return IntroDisplay型
 */
export function createInitialState(): IntroDisplay {
  return {
    displayed: IntroDisplayType.NONE_DISPLAYED,
  };
}

/**
 * 初回表示制御 Store
 */
@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'intro-display' })
export class IntroDisplayStore extends Store<IntroDisplay> {
  constructor() {
    super(createInitialState());
  }
}
