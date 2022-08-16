import { Component, OnInit } from '@angular/core';
import { Commande } from '../../shared/models/commande';
import { CommandeService } from '../../shared/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  public commande:  Commande[]|undefined=undefined

  constructor(private servicecommande: CommandeService) { }

  ngOnInit(): void {

    this.servicecommande.commandeGet().subscribe(data => {
      this.commande = data
      console.log(data)
    })
  }
   

}
