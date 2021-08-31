import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './Stores.component';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:StoresComponent,
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
  declarations: [StoresComponent, ListComponent]
})
export class StoresModule { }
