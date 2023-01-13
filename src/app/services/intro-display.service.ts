import { IntroDisplayStore } from 'src/app/stores/intro-display.store';
import { IntroDisplayQuery } from 'src/app/queries/intro-display.query';
import { Injectable } from '@angular/core';

/**
 * 初回表示制御 Service
 */
@Injectable({
  providedIn: 'root',
})
export class IntroDisplayService {
  constructor(
    protected store: IntroDisplayStore,
    public query: IntroDisplayQuery
  ) {}

  /**
   *  初回表示フラグを取得
   * @return {number} モードタイプ
   */
  getDisplayed(): number {
    return this.query.getValue()?.displayed;
  }

  /**
   *  初回表示フラグを更新
   * @param {number} モードタイプ
   */
  setDisplayed(displayed: number): void {
    this.store.update({ displayed: displayed });
  }
}
