import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [{ path: '', component: ClientComponent },
{ path: 'detail/:id', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
{ path: 'burger', loadChildren: () => import('./burger/burger.module').then(m => m.BurgerModule) },
{ path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
{ path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) },
{ path: 'login', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule) },
{ path: 'inscrire', loadChildren: () => import('./page.connexion/inscription/inscription.module').then(m => m.InscriptionModule) },
{ path: 'connexion', loadChildren: () => import('./page.connexion/connexion/connexion.module').then(m => m.ConnexionModule) },
{ path: 'listercommande', loadChildren: () => import('./page/commande/commande.module').then(m => m.CommandeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
