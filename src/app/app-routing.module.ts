import { DevisDisplayComponent } from './features/devis/devis-display/devis-display.component';
import { CreateDevisComponent } from './features/devis/create-devis/create-devis.component';
import { ClientComponent } from './features/client/client.component';
import { DevisComponent } from './features/devis/devis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'devis',
    component: DevisComponent,
    // children: [
    //   {
    //     path: 'createDevis',
    //     component: CreateDevisComponent,
    //   },
    //   {
    //     path: 'displayDevis',
    //     component: DevisDisplayComponent,
    //   },
    // ],
  },
  {
    path: 'client',
    component: ClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
