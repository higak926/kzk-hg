import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  language: string = 'ja';
  topTitle: string = 'ようこそ 一晃のサイトへ !';
  introTitle: string = '何このページ ？';
  introduction: string =
    '一言でご説明すると開設者こと、比嘉　一晃の趣味です。\n\n' +
    '開発アプリのご紹介や時事ネタ(?)や気になるトレンドなどをまとめ、面白く眺められるサイトを目指しています。\n\n' +
    '暖かい目で見ていただけると幸いです。';

  topTitleEn: string = "Welcome To Kazuaki's Page !";
  introTitleEn: string = "What's This Page ？";
  introductionEn: string =
    'To put it simply, it is the hobby of the founder, Kazuaki Higa.\n\n' +
    'We aim to be an interesting site that introduces development apps, summarizes current affairs (?), and interesting trends.\n\n' +
    'I would appreciate it if you could see it with warm eyes.';
  constructor() {}

  ngOnInit(): void {}
}
