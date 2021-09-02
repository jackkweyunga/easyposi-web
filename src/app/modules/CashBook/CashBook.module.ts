import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashBookComponent } from './CashBook.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path:'', component:CashBookComponent,
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
  declarations: [CashBookComponent]
})
export class CashBookModule { }
