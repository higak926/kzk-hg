import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from 'src/app/error/error.component';
const routes: Routes = [
  {
    path: 'top',
    loadChildren: () =>
      import('src/app/top/top.module').then((m) => m.TopModule),
  },
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
