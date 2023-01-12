import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
];

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgxUsefulSwiperModule],
  providers: [],
})
export class TopModule {}
