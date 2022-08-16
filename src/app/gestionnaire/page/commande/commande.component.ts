import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/client/shared/models/commande';
import { CommandeService } from 'src/app/client/shared/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commande: Commande[] = []
  filterDate: any
  filterZone: any
  filterClient:any

  constructor(private http: HttpClient, private servicecommande: CommandeService) { }

  ngOnInit(): void {

    this.servicecommande.commandeAll().subscribe(data => {
      this.commande = data.filter(produit =>
        produit.etat === "en cour")
      console.log(data)

      
     
    })

  }

}
