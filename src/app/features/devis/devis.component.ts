import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Bill } from '../features';
import { DevisService } from './devis.service';

export interface tabItem {
  label: string;
  route: string;
}
enum Tabs {
  Dashboard = 0,
  createDevis = 1,
  displayDevis = 2,
}
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss'],
})
export class DevisComponent implements OnInit {
  // devisPrintData: any;
  @ViewChild('devisTab', { static: false }) devisTab: any;
  tabIndex: Tabs = Tabs.createDevis;

  constructor(private devisService: DevisService) {}

  ngOnInit(): void {}

  getCreatedDevis(devisObj: any) {
    this.setTab(Tabs.displayDevis);
    this.devisService.setDevisData(devisObj);
    // this.devisPrintData = devisObj;
    console.log('ev', devisObj);
  }

  setTab(tab: Tabs) {
    this.tabIndex = tab;
  }
}
