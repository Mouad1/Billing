import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableDataColumns = [
    {name:'Nom',dataKey:'Name'},
    {name:'Age',dataKey:'Age'}
  ];
  tableData = [
    {Name:'Mouad',Age:29},
    {Name:'boutaina',Age:26},
    {Name:'Jojo',Age:1}

  ]

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    // this.clientService.getAllClients().subscribe({
    //   next:((clientData : any)=>{
    //     console.log(clientData);
    //   })
    // })
  }

}
