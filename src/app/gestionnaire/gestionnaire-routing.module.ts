import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionnaireComponent } from './gestionnaire.component';

const routes: Routes = [{ path: '', component: GestionnaireComponent }, { path: 'listercommande', loadChildren: () => import('./page/commande/commande.module').then(m => m.CommandeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
