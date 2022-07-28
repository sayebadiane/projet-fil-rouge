import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  constructor(private produitcatalogue:CatalogueService) { }
  burger$:Observable<Catalogue>|null=null

  ngOnInit(): void {
    this.burger$=this.produitcatalogue.allBurger()
  }

}
