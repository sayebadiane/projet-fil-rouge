import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/modelProduit';
import { menuportionfrites } from '../../shared/models/menuportionfrites';


@Component({
  selector: 'app-detail-portion-frite',
  templateUrl: './detail-portion-frite.component.html',
  styleUrls: ['./detail-portion-frite.component.css']
})
export class DetailPortionFriteComponent implements OnInit {
  @Input('frite') frite: menuportionfrites[]|undefined = undefined


  constructor() { }

  ngOnInit(): void {
  }

}
