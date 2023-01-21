import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './devis.component';
import { CreateDevisModule } from './create-devis/create-devis.module';
import { DevisDisplayModule } from './devis-display/devis-display.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [DevisComponent],
  imports: [
    CommonModule,
    CreateDevisModule,
    DevisDisplayModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [DevisComponent],
})
export class DevisModule {}
