import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './Items.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:ItemsComponent,
    children: [
      {path:'', component:ListComponent},

    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [ItemsComponent, ListComponent]
})
export class ItemsModule { }
