import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './Sales.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:SalesComponent,
    children: [
      {path:'', component:ListComponent},

    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forChild(routes),

  ],
  declarations: [SalesComponent, ListComponent]
})
export class SalesModule { }
