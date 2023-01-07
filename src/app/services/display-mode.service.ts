import { DisplayModeStore } from 'src/app/stores/display-mode.store';
import { DisplayModeQuery } from 'src/app/queries/display-mode.query';
import { Injectable } from '@angular/core';

/**
 * 表示モード Service
 */
@Injectable({
  providedIn: 'root',
})
export class DisplayModeService {
  constructor(
    protected store: DisplayModeStore,
    public query: DisplayModeQuery
  ) {}

  /**
   *  現在の表示モードタイプを取得
   * @return {number} モードタイプ
   */
  getModeType(): number {
    return this.query.getValue()?.modeType;
  }

  /**
   *  現在の表示モードタイプを更新
   * @param {number} モードタイプ
   */
  setModeType(modeType: number): void {
    this.store.update({ modeType: modeType });
  }
}
