import { PlayingManagerStore } from 'src/app/stores/playing-manager.store';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { Injectable } from '@angular/core';

/**
 * Playing管理 Service
 */
@Injectable({
  providedIn: 'root',
})
export class PlayingManagerService {
  constructor(
    protected store: PlayingManagerStore,
    public query: PlayingManagerQuery
  ) {}

  /**
   *  TOPの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedTop(displayedTop: number): void {
    this.store.update({ displayedTop: displayedTop });
  }

  /**
   *  Webの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedWeb(displayedWeb: number): void {
    this.store.update({ displayedWeb: displayedWeb });
  }

  /**
   *  Soccerの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedSoccer(displayedSoccer: number): void {
    this.store.update({ displayedSoccer: displayedSoccer });
  }

  /**
   *  BigDataの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedBigData(displayedBigData: number): void {
    this.store.update({ displayedBigData: displayedBigData });
  }

  /**
   *  Codingの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedCoding(displayedCoding: number): void {
    this.store.update({ displayedCoding: displayedCoding });
  }

  /**
   *  Mathの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedMath(displayedMath: number): void {
    this.store.update({ displayedMath: displayedMath });
  }

  /**
   *  Economyの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedEconomy(displayedEconomy: number): void {
    this.store.update({ displayedEconomy: displayedEconomy });
  }

  /**
   *  AIの表示回数を更新
   * @param {number} モードタイプ
   */
  setDisplayedAi(displayedAi: number): void {
    this.store.update({ displayedAi: displayedAi });
  }
}
