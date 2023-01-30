import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai/ai.component';
import { BigDataComponent } from './big-data/big-data.component';
import { CodingComponent } from './coding/coding.component';
import { EconomyComponent } from './economy/economy.component';
import { MathComponent } from './math/math.component';
import { SoccerComponent } from './soccer/soccer.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
    path: 'ai',
    component: AiComponent,
  },
  {
    path: 'big-data',
    component: BigDataComponent,
  },
  {
    path: 'coding',
    component: CodingComponent,
  },
  {
    path: 'economy',
    component: EconomyComponent,
  },
  {
    path: 'math',
    component: MathComponent,
  },
  {
    path: 'soccer',
    component: SoccerComponent,
  },
  {
    path: 'web',
    component: WebComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class CategoryModule {}
