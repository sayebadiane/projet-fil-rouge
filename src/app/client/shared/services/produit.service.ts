import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/modelProduit';
import { Observable } from 'rxjs/internal/Observable';
import { of, tap, pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url: string = "http://localhost:3000/produits"


  constructor(private http: HttpClient) {

  }
  all():Observable<Produit[]> {
    //console.log("data");

    return this.http.get<Produit[]>(this.url);
 

  }
}
