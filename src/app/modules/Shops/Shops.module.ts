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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopsService } from './services/shops.service';

const routes: Routes = [
  {path:'', redirectTo: 'p'},
  {path:'p', component:ShopsComponent,
    children: [
      {path:'', redirectTo: 'list'},
      {path:'list', component:ListComponent},
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
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ShopsComponent, ListComponent, AddShopComponent, EditShopComponent],
  providers: [ShopsService]

})
export class ShopsModule { }
