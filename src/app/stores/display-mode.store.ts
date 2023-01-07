import { Store, StoreConfig } from '@datorama/akita';
import { DisplayMode } from 'src/app/models/display-mode.model';
import { DisplayModeType } from 'src/app/enums';
import { Injectable } from '@angular/core';

/**
 * 表示モード Store
 * @return DisplayMode型
 */
export function createInitialState(): DisplayMode {
  return {
    modeType: DisplayModeType.DEFAULT,
  };
}

/**
 * 表示モード Store
 */
@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'display-mode' })
export class DisplayModeStore extends Store<DisplayMode> {
  constructor() {
    super(createInitialState());
  }
}
