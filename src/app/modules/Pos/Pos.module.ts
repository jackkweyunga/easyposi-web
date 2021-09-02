import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosComponent } from './Pos.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path:'', component:PosComponent,
    children: [
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),

  ],
  declarations: [PosComponent]
})
export class PosModule { }
