import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

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
  private onDestroy$: Subject<void> = new Subject();

  constructor(public router: Router) {}

  ngOnInit(): void {
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
  }

  toTop(): void {
    if (this.router.url !== this.topPath) {
      this.router.navigate([this.topPath]);
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
