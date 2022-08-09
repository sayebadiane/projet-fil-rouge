import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/modelProduit';

@Component({
  selector: 'app-frite',
  templateUrl: './frite.component.html',
  styleUrls: ['./frite.component.css']
})
export class FriteComponent implements OnInit {
  @Input('frite') frite: Produit[] | undefined = undefined


  constructor() { }

  ngOnInit(): void {
  }
  fontSizePx=1

}
