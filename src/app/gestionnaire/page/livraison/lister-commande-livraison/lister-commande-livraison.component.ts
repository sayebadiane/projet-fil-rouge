import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/client/shared/models/commande';
import { CommandeDunLivraisonService } from 'src/app/client/shared/services/commande-dun-livraison.service';

@Component({
  selector: 'app-lister-commande-livraison',
  templateUrl: './lister-commande-livraison.component.html',
  styleUrls: ['./lister-commande-livraison.component.css']
})
export class ListerCommandeLivraisonComponent implements OnInit {
  public commandeLivraison:Commande[]|undefined

  constructor(private servicecommandelivraison: CommandeDunLivraisonService) { }

  ngOnInit(): void {
    this.servicecommandelivraison.ListerCommandeLivraison().subscribe(data => {
      this.commandeLivraison = data
      console.log(data)
    }
    )
  }

}
