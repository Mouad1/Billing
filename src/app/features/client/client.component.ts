import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../features';

@Component({
  selector: 'mb-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe({
      next:((clientData : any)=>{
        console.log(clientData);
      })
    })
  }

}
