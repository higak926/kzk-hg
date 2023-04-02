import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/enums';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  constructor(private router: Router) {}
  @Output() hamburgerMenuOpened = new EventEmitter<boolean>();
  myFavoriteCategory = [
    { name: 'Web' },
    { name: 'Soccer' },
    { name: 'Big Data' },
    { name: 'Coding' },
    { name: 'Math' },
    { name: 'Economy' },
    { name: 'AI' },
  ];

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    window.scroll({ top: 0 });
  }

  /**
   * To Category
   * @param string
   */
  toCategory(category: string): void {
    this.hamburgerMenuOpened.emit(false);
    switch (category) {
      case 'Web':
        this.router.navigate([Path.CATEGORY_WEB]);
        break;
      case 'Soccer':
        this.router.navigate([Path.CATEGORY_SOCCER]);
        break;
      case 'Big Data':
        this.router.navigate([Path.CATEGORY_BIG_DATA]);
        break;
      case 'Coding':
        this.router.navigate([Path.CATEGORY_CODING]);
        break;
      case 'Math':
        this.router.navigate([Path.CATEGORY_MATH]);
        break;
      case 'Economy':
        this.router.navigate([Path.CATEGORY_ECONOMY]);
        break;
      case 'AI':
        this.router.navigate([Path.CATEGORY_AI]);
        break;
      default:
        break;
    }
  }
}
