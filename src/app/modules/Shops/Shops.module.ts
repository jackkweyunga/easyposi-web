import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './Shops.component';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddShopComponent } from './components/add-shop/add-shop.component';
import { EditShopComponent } from './components/edit-shop/edit-shop.component';

const routes: Routes = [
  {path:'', component:ShopsComponent,
    children: [
      {path:'', component:ListComponent},
      {path:'add', component:AddShopComponent},
      {path:'edit', component:EditShopComponent},


    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [ShopsComponent, ListComponent]
})
export class ShopsModule { }
