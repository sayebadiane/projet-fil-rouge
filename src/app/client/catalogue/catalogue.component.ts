import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from '../shared/models/modelProduit';
import { ProduitService } from '../shared/services/produit.service';
import { of, tap, pipe, observable, filter } from 'rxjs';
import { CatalogueService } from '../shared/services/catalogue.service';
import { Catalogue } from '../shared/models/catalogue';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
   variable:string=""
  //  produit$: Observable<Catalogue> | null = null;
  catalogue:Produit[]|undefined=undefined
   

  constructor(private produitcatalogue:CatalogueService ) { }

  ngOnInit(): void {
    // this.produit$ = this.produitcatalogue.all();

    
    // this.produitcatalogue.all().subscribe((data) => this.catalogue = data)

  
    
    this.produitcatalogue.all().subscribe(data => {
      this.catalogue=data.produits
    })

  }
  cat(a: string): void{
    
    this.produitcatalogue.all().subscribe(data => {
      if (a == "") {
        this.catalogue = data.produits
      }
      else {
       
        this.catalogue = data.produits?.filter(produit =>
          produit.type==a)
      }
      })
    }
    // else if (a == 'menu') {
    //   // this.produit$ = this.produitcatalogue.allMenu()
    //   this.produitcatalogue.all().subscribe(data => {
    //     this.catalogue = data.menus
    //   })
    // }

    
    // else if (a == 'burger') {
    //   // this.produit$ = this.produitcatalogue.allBurger()
    //   this.produitcatalogue.all().subscribe(data => {
    //     this.catalogue = data.burgers
    //   })
      
    // }
    
    
    
  }
  


