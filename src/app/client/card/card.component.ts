import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../shared/models/modelProduit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input("card") card: Produit | null = null
  @Input("burgerCard") burgerCard: Produit | null = null


  constructor() { }

  ngOnInit(): void {
  }

}
