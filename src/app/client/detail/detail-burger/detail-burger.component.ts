import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onYelle = new EventEmitter;
  nbr: number|undefined;



  constructor() { }

  ngOnInit(): void {
  }
  fontSizePx = 0

  yell(e: any) {
    this.onYelle.emit([e,'burger']);  }
  

}
