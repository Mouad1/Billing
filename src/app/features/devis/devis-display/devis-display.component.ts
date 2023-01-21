import { Component, Input, OnInit } from '@angular/core';
import { DevisService } from '../devis.service';

@Component({
  selector: 'devis-display',
  templateUrl: './devis-display.component.html',
  styleUrls: ['./devis-display.component.scss'],
})
export class DevisDisplayComponent implements OnInit {
  // @Input('printData') printData: any;
  printableData: any;
  now = new Date();
  sizePage = {
    width: 21, //cm
    height: 29.7, //cm
  };
  tableDataColumns = [
    { name: 'Nom produit', dataKey: 'nomProd' },
    { name: 'Quantité', dataKey: 'Q' },
    { name: 'Prix unitaire', dataKey: 'PU' },
    { name: 'Total', dataKey: 'tot' },
  ];
  tableData = [
    { nomProd: 'Mouad', Q: 29, PU: 120 },
    { nomProd: 'boutaina', Q: 26, PU: 120 },
    { nomProd: 'Jojo', Q: 1, PU: 120 },
  ];
  constructor(private devisService: DevisService) {}

  ngOnInit(): void {
    this.devisService.devisData$.subscribe({
      next: (data: any) => {
        this.printableData = data;
        console.log(data);
        // console.log(new Date().getTime());
        // console.log(Date.now());
      },
    });
    // console.log('display: ', this.printData);
  }
}
