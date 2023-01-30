import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from 'src/app/error/error.component';
const routes: Routes = [
  {
    path: 'top',
    loadChildren: () =>
      import('src/app/top/top.module').then((m) => m.TopModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('src/app/category/category.module').then((m) => m.CategoryModule),
  },
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
