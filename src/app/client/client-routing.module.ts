import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [{ path: '', component: ClientComponent },
{ path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
{ path: 'burger', loadChildren: () => import('./burger/burger.module').then(m => m.BurgerModule) },
{ path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
