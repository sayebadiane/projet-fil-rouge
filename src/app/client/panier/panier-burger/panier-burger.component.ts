import { Component, Input, OnInit } from '@angular/core';
import { menuburgers } from '../../shared/models/commande';
import { ComplementDetail } from '../../shared/models/complementDetail';
import { menuBurgers } from '../../shared/models/menuBurger';
import { Produit } from '../../shared/models/modelProduit';

@Component({
  selector: 'app-panier-burger',
  templateUrl: './panier-burger.component.html',
  styleUrls: ['./panier-burger.component.css']
})
export class PanierBurgerComponent implements OnInit {
  @Input() burger: menuburgers[] | undefined = undefined


  constructor() { }

  ngOnInit(): void {
  }

}
