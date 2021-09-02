import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from "./Navigation.component";
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ThemeMenuComponent } from './components/theme-menu/theme-menu.component';


const routes: Routes = [
  {path:'', component:NavigationComponent,
    children: [
      {path:"", redirectTo: 'dashboard'},
      {path:'dashboard', component:DashboardComponent},
      {path:'shops', loadChildren: () => import('../Shops/Shops.module').then(m => m.ShopsModule)},
      {path:'sales', loadChildren: () => import('../Sales/Sales.module').then(m => m.SalesModule)},
      {path:'entries', loadChildren: () => import('../Entries/Entries.module').then(m => m.EntriesModule)},
      {path:'items', loadChildren: () => import('../Items/Items.module').then(m => m.ItemsModule)},
      {path:'settings', loadChildren: () => import('../Settings/Settings.module').then(m => m.SettingsModule)},
      {path:'workers', loadChildren: () => import('../Workers/Workers.module').then(m => m.WorkersModule)},
      {path:'stores', loadChildren: () => import('../Stores/Stores.module').then(m => m.StoresModule)},
      {path:'stores', loadChildren: () => import('../Stores/Stores.module').then(m => m.StoresModule)}

    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardComponent, NavigationComponent, ThemeMenuComponent,]
})


export class NavigationModule {

}

