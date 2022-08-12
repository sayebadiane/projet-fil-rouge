import { Component, Input, OnInit } from '@angular/core';
import { menuburgers } from '../../shared/models/commande';
import { ComplementDetail } from '../../shared/models/complementDetail';

@Component({
  selector: 'app-panier-menu',
  templateUrl: './panier-menu.component.html',
  styleUrls: ['./panier-menu.component.css']
})
export class PanierMenuComponent implements OnInit {
  @Input() menu: menuburgers[] | undefined = undefined


  constructor() { }

  ngOnInit(): void {
  }

}
