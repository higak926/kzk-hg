import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller: boolean = false;
  title = 'kzk-hg';
  loginLogoImage = 'assets/images/login_logo.png';
  menuOpened: boolean = false;

  constructor() {}

  /**
   * メニュー開閉 変更
   */
  changeMenuOpenedStatus(hamburgerMenuOpened: boolean): void {
    this.menuOpened = hamburgerMenuOpened;
  }
}
