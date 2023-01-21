import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisDisplayComponent } from './devis-display.component';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [DevisDisplayComponent],
  imports: [CommonModule, TableModule, MatCardModule],
  exports: [DevisDisplayComponent],
})
export class DevisDisplayModule {}
