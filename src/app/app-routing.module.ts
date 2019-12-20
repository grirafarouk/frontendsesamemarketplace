import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommandeComponent } from './commande/commande.component';
import { ListecommandeComponent } from './listecommande/listecommande.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
   {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        component:UserComponent
      },
      { 
        path: 'commande',
        component:CommandeComponent

      },
      {
        path: 'produit',
        component:ProduitComponent

      },
      {
        path: 'listeuser',
        component:ListeuserComponent
      },
      { 
        path: 'listecommande',
        component:ListecommandeComponent

      },
      {
        path: 'listeproduit',
        component:ListeproduitComponent

      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
