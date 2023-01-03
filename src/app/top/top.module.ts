import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
];

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class TopModule {}
