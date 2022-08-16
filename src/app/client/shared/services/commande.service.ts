import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable,tap } from 'rxjs';
import { Commande, zone } from '../models/commande';
import { ComplementDetail } from '../models/complementDetail';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private url: string = "http://localhost:8000/api/commandes"
  private urlget: string ="http://localhost:8000/api/commandes"
  public commande: Commande[] |undefined

  constructor(private http:HttpClient) { }
  commenderBack(montant:any,burgerCommandes:any,menuCommandes:any,zone:zone): Observable<any> {
    const loginData = {
      "montant": montant,
      "burgerCommandes": burgerCommandes,
      "menuCommandes": menuCommandes,
      "zone":zone
    }
    return this.http.post<any>(this.url, loginData).pipe(
      
    )

  }
 
  commandeGet(): Observable<Commande[]> {
    return this.http.get<any>(this.urlget).pipe(
      map(data => {
        let catalogue: Commande = data['hydra:member']
        console.log("voici l objet" + data['hydra:member'][0])
        data =catalogue
        return data

      })
    )
      
      
    
  }

}
