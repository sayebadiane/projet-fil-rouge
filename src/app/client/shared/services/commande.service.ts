import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande, zone } from '../models/commande';
import { ComplementDetail } from '../models/complementDetail';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url: string = "http://localhost:8000/api/commandes"
  public commande: Commande |undefined

  constructor(private http:HttpClient) { }
  commenderBack(montant:any,burgerCommandes:any,menuCommandes:any,zone:zone): Observable<any> {
    const loginData = {
      "montant": montant,
      "burgerCommandes": burgerCommandes,
      "menuCommandes": menuCommandes,
      "zone":zone
    }
    console.log(loginData)
    return this.http.post<any>(this.url, loginData).pipe(
      
    )

  }
}
