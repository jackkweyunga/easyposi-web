import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './Invoices.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {path:'', component:InvoicesComponent,
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
  declarations: [InvoicesComponent]
})
export class InvoicesModule { }
