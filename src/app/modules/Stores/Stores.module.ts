import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './Stores.component';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path:'', redirectTo: 'p'},
  {path:'p', component:StoresComponent,
    children: [
      {path:'', redirectTo: 'list'},
      {path:'list', component:ListComponent},
      {path:'edit', component:EditComponent},
      {path:'add', component:AddComponent},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [StoresComponent, ListComponent, AddComponent, EditComponent],
})
export class StoresModule { }
