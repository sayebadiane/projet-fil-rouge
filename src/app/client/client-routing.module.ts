import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [{ path: '', component: ClientComponent },
{ path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
{ path: 'burger', loadChildren: () => import('./burger/burger.module').then(m => m.BurgerModule) },
{ path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
{ path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
