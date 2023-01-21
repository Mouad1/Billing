import { Client } from '../features';
import { BASEURL, CLIENT } from './../../shared/models/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
private readonly clientUrl = BASEURL+CLIENT;
  constructor(private httpClient : HttpClient) { }

  getAllClients() : Observable<Client[]> {
    console.log(this.clientUrl)
    return this.httpClient.get(this.clientUrl) as Observable<Client[]>;
  }
}
