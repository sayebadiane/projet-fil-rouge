import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/client/shared/models/commande';
import { livraisons } from 'src/app/client/shared/models/livraison';
import { livreur } from 'src/app/client/shared/models/livreure';
import { CommandeService } from 'src/app/client/shared/services/commande.service';
import { LivraisonService } from 'src/app/client/shared/services/livraison.service';
import { LivreurService } from 'src/app/client/shared/services/livreur.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
  commande: Commande[] = []
  livreurs: any[]=[]
  a: any
  constructor(private servicecommande: CommandeService, private servicelivreur: LivreurService, private serviceLivraison:LivraisonService) { }

  ngOnInit(): void {
    this.servicecommande.commandeTerminerZone().subscribe(data => {
      this.commande = data.filter(produit =>
        produit.etat === "terminer")
    })
    this.servicelivreur.livreure().subscribe(data => {
      this.livreurs = data.filter(produit =>
        produit.etat === "disponible")
      console.log(data)

    })
  }
  
  Enregistrerlivraison() {
    alert(this.a)
    
    let livre: livreur ={
      "id":this.a
      
    }

    this.serviceLivraison.Livraisonenregistrer(10000, this.commande, livre,'en cour').subscribe(
      data => {

        alert("Livraison Enregistrer")
        console.log(data)
      }
    )
    
    
  }

}
