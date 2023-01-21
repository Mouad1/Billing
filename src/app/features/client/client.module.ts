import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { Routes, RouterModule } from '@angular/router';

// const clientRoutes: Routes = [
//   {
//     path: '',
//     component: ClientComponent,
//   },
// ];

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    //  RouterModule.forChild(clientRoutes),
    MatTabsModule,
  ],
  exports: [ClientComponent],
})
export class ClientModule {}
