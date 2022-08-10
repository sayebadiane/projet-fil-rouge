import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { boissonTaille } from '../../shared/models/boissonTaille';
import { Produit } from '../../shared/models/modelProduit';

@Component({
  selector: 'app-card-boison',
  templateUrl: './card-boison.component.html',
  styleUrls: ['./card-boison.component.css']
})
export class CardBoisonComponent implements OnInit {
  @Input('boisson') boisson: boissonTaille[] | undefined = undefined
  @Output() boissonpris = new EventEmitter()



  constructor() { } 

  ngOnInit(): void {
    
  }
  fontSizePx = 0;
  
  

}
