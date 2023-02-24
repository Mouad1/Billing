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
    { name: 'Désignation', dataKey: 'prodName' },
    { name: 'QTE.', dataKey: 'quantity' },
    { name: 'Prix unitaire', dataKey: 'priceHT' },
    { name: 'Total', dataKey: 'tot' },
  ];
  tableData: any;
  //  = [
  //   { nomProd: 'produitA', Q: 29, PU: 120, tot: 29 * 120 },
  //   { nomProd: 'ProduitB', Q: 26, PU: 120, tot: 26 * 120 },
  //   { nomProd: 'ProduitS', Q: 1, PU: 120, tot: 1 * 120 },
  // ];
  constructor(private devisService: DevisService) {}

  ngOnInit(): void {
    this.devisService.devisData$.subscribe({
      next: (data: any) => {
        this.printableData = data;
        console.log(data);
        this.tableData = data.products;
        // console.log(new Date().getTime());
        // console.log(Date.now());
      },
    });
    // console.log('display: ', this.printData);
  }

  // calculerPrixUnitHT(prix) {}
}
