import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../shared/models/boissonTaille';
import { ComplementDetail } from '../../shared/models/complementDetail';
import { Produit } from '../../shared/models/modelProduit';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {
  @Input() burg: Produit | undefined = undefined



  constructor() { }

  ngOnInit(): void {
  }

}
