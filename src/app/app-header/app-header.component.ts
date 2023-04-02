import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { DisplayModeService } from 'src/app/services/display-mode.service';
import { DisplayModeType } from 'src/app/enums';
import { PlayingManagerQuery } from 'src/app/queries/playing-manager.query';

/**
 * AppHeaderComponent
 */
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  @Output() hamburgerMenuOpened = new EventEmitter<boolean>();
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
    { id: DisplayModeType.DEFAULT, name: 'Default', path: '/top' },
    { id: DisplayModeType.WEB, name: 'Web', path: '/category/web' },
    { id: DisplayModeType.SOCCER, name: 'Soccer', path: '/category/soccer' },
    {
      id: DisplayModeType.BIG_DATA,
      name: 'Big Data',
      path: '/category/big-data',
    },
    { id: DisplayModeType.CODING, name: 'Coding', path: '/category/coding' },
    { id: DisplayModeType.MATH, name: 'Math', path: '/category/math' },
    { id: DisplayModeType.DEFAULT, name: 'Economy', path: '/category/economy' },
    { id: DisplayModeType.AI, name: 'AI', path: '/category/ai' },
  ];
  getScreenWidth: number = 0;
  isPhoneSize: boolean = false;
  menuOpened: boolean = false;
  private readonly phoneSizeBounds: number = 430;

  private onDestroy$: Subject<void> = new Subject();

  constructor(
    public router: Router,
    private displayModeService: DisplayModeService,
    private playingManagerQuery: PlayingManagerQuery
  ) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    // 画面サイズでヘッダー表示内容を判定
    this.getScreenWidth = window.innerWidth;
    this.isPhoneSize = this.getScreenWidth <= this.phoneSizeBounds;
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
    this.router.url !== this.topPath
      ? this.router.navigate([this.topPath])
      : location.reload();
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
    const target: SelectModeType | undefined = this.modeList.find(
      (e) => e.name === this.selectedMode
    );
    target
      ? this.displayModeService.setModeType(target.id)
      : this.displayModeService.setModeType(DisplayModeType.DEFAULT);
    this.showModeSelect = false;
    this.toSelectModePage(target);
  }

  /**
   * 選択モード ページ遷移
   */
  toSelectModePage(target: SelectModeType | undefined): void {
    // 選択したモードがない場合、トップへ（異常系）
    if (!target) {
      this.router.navigate([this.topPath]);
      return;
    }

    // 選択したモードに沿って、リダイレクト
    if (this.router.url !== target.path) {
      this.router.navigate([target.path]);
    }
  }

  /**
   * モード選択モーダル オープン
   */
  showModeSelectModal(): void {
    this.menuOpened = false;
    this.hamburgerMenuOpened.emit(this.menuOpened);
    this.selectedMode = this.modeType;
    this.showModeSelect = true;
  }

  /**
   * メニュー オープン
   */
  openMenu(): void {
    this.menuOpened = true;
    this.hamburgerMenuOpened.emit(this.menuOpened);
  }

  /**
   * メニュー クローズ
   */
  closeMenu(): void {
    this.menuOpened = false;
    this.hamburgerMenuOpened.emit(this.menuOpened);
  }

  /**
   * リサイズ スマホサイズ判定
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.isPhoneSize = this.getScreenWidth <= this.phoneSizeBounds;
    if (!this.isPhoneSize) {
      this.menuOpened = false;
      this.hamburgerMenuOpened.emit(this.menuOpened);
    }
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
  path: string;
}
