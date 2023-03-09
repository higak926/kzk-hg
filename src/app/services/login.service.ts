// import { LoginStore } from 'src/app/stores/intro-display.store';
// import { LoginQuery } from 'src/app/queries/intro-display.query';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * ログイン Service
 */
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  /**
   *  ログイン
   */
  login(): void {
    this.httpClient.get('http://localhost:8000/').subscribe((res) => {
      console.log('みてみよう');
      console.log(res);
    });
  }
}
