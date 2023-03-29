import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { DisplayModeService } from 'src/app/services/display-mode.service';
import { LoginService } from 'src/app/services/login.service';
import { DisplayModeType } from 'src/app/enums';
import { PlayingManagerService } from 'src/app/services/playing-manager.service';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';
import { IntroDisplayType, Path, PlayingManagerType } from 'src/app/enums';

/**
 * AppHeaderComponent
 */
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  imgSrc: string = 'assets/images/header-logo.png';
  rootPath: string = '/';
  topPath: string = '/top';
  isTop: boolean = false;
  currentUrl: string = '';
  modeType: string = 'Default';
  playPercent: number = 0;
  loginBtn: string = 'ログイン';
  showModeSelect: boolean = false;
  selectedMode: string = '';
  modeList: SelectModeType[] = [
    { id: DisplayModeType.DEFAULT, name: 'Default' },
    { id: DisplayModeType.WEB, name: 'Web' },
    { id: DisplayModeType.SOCCER, name: 'Soccer' },
    { id: DisplayModeType.BIG_DATA, name: 'Big Data' },
    { id: DisplayModeType.CODING, name: 'Coding' },
    { id: DisplayModeType.MATH, name: 'Math' },
    { id: DisplayModeType.DEFAULT, name: 'Economy' },
    { id: DisplayModeType.AI, name: 'AI' },
  ];

  private onDestroy$: Subject<void> = new Subject();

  constructor(
    public router: Router,
    private loginService: LoginService,
    private displayModeService: DisplayModeService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    const currentModeName = this.modeList.find(
      (e) => e.id === this.displayModeService.getModeType()
    )?.name;
    if (currentModeName) {
      this.modeType = currentModeName;
    }
    this.currentUrl = this.router.url;
    this.router.events
      .pipe(
        takeUntil(this.onDestroy$),
        filter(
          (event: Event): event is RouterEvent => event instanceof NavigationEnd
        )
      )
      .subscribe((event: RouterEvent) => {
        this.currentUrl = event.url;
        this.isTop =
          this.currentUrl === this.topPath || this.currentUrl === this.rootPath;
      });

    this.calculatePlayPercent();
  }

  /**
   * calculatePlayPercent
   */
  calculatePlayPercent(): void {
    const target = this.playingManagerQuery.getValue();
    const displayedNumbers = [
      target.displayedTop,
      target.displayedWeb,
      target.displayedSoccer,
      target.displayedBigData,
      target.displayedCoding,
      target.displayedMath,
      target.displayedEconomy,
      target.displayedAi,
    ];

    displayedNumbers.map((displayedNumber) => {
      if (!!displayedNumber) {
        this.playPercent += 5;
      }
    });
  }

  /**
   * toTop
   */
  toTop(): void {
    if (this.router.url !== this.topPath) {
      this.router.navigate([this.topPath]);
    }
  }

  /**
   * toLogin
   */
  toLogin(): void {
    console.log('Loginするよ!');
    this.loginService.login();
  }

  /**
   * モード選択 キャンセル
   */
  modeSelectCancel(): void {
    this.showModeSelect = false;
  }

  /**
   * モード選択 決定
   */
  modeSelectOk(): void {
    this.modeType = this.selectedMode;
    const target = this.modeList.find((e) => e.name === this.selectedMode);
    target
      ? this.displayModeService.setModeType(target.id)
      : this.displayModeService.setModeType(DisplayModeType.DEFAULT);
    this.showModeSelect = false;
  }

  /**
   * モード選択モーダル オープン
   */
  showModeSelectModal(): void {
    this.selectedMode = this.modeType;
    this.showModeSelect = true;
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}

/**
 * 表示モード IF
 */
export interface SelectModeType {
  id: number;
  name: string;
}
