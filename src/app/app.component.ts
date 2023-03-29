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

  constructor() {}
}
