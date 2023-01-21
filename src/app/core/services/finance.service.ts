import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor() { }

  print_today() {
    var now = new Date();
    var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
    var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
    var today =  months[now.getMonth()] + " " + date + ", " + (this.fourdigits(now.getFullYear()));
    return today;  
  }

   fourdigits(number: number) {
    return (number < 1000) ? number + 1900 : number;
  }

  roundNumber(number: number,decimals: number){

  }

  update_total(){

  }

  update_balance(){

  }


}
