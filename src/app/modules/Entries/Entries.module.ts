import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './Entries.component';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', component:EntriesComponent,
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
  declarations: [EntriesComponent, ListComponent]
})
export class EntriesModule { }
