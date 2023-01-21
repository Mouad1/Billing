import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevisService {
  private devisDataSubject = new BehaviorSubject<any>({});
  devisData$ = this.devisDataSubject.asObservable();

  getDevisData() {
    return this.devisDataSubject.value;
  }

  setDevisData(data: any) {
    this.devisDataSubject.next(data);
  }
  constructor() {}
}
