import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../shared/models/modelProduit';

@Component({
  selector: 'app-liste-cadrde',
  templateUrl: './liste-cadrde.component.html',
  styleUrls: ['./liste-cadrde.component.css']
})
export class ListeCadrdeComponent implements OnInit {
  @Input('listburger') listburger: Produit[] | undefined = undefined

  @Input('prod') produits: Produit[] | undefined = undefined

  constructor() { }

  ngOnInit(): void {
  }

}
