import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/models/commande';
import { ComplementDetail } from '../shared/models/complementDetail';
import { CommandeService } from '../shared/services/commande.service';
import { ComplementDetailService } from '../shared/services/complement-detail.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public panier: Commande | undefined
 

  constructor(private service: PanierService, private serviceCommande: CommandeService) { }

  ngOnInit(): void {
    this.panier = this.service.panier
    // console.log(this.panier)
    localStorage.setItem("p", JSON.stringify(this.panier))
    console.log(this.panier.zone)

  
  }
  add(): void{
    this.panier = this.service.panier
    // localStorage.setItem("p","this.panier")

  }
  commenderclient() {
    let zone = {
      id:1
    }
    this.serviceCommande.commenderBack(this.panier?.montant, this.panier?.burgerCommandes, this.panier?.menuCommandes, zone).subscribe(
      data => {
        alert("Commande Enregistrer")
        console.log("les donnée" +data)
      }
    )







    // this.serviceCommande.serviceCommande(this.login, this.password).subscribe(data => {
    //   this.tok = data;

    //   this.serviceautho.token = data.token;
    //   console.log(data.token);
    //   if (data.token != '') {
    //     alert('connexion reussi');
    //     this.router.navigate(['client'])
    //   }

    // }, error => {
    //   alert('login ou mot de passe incorect')
    // })

    
  }
  // ngOnInit(): void {
  //   this.panier = this.service.panier
  //   console.log(this.panier)
  //   localStorage.setItem("p", JSON.stringify(this.panier))


  // }
  // add(): void {
  //   this.panier = this.service.panier
  //   localStorage.setItem("p", "this.panier")

  // }
  
  // commande() {
  //   if (this.serviceCommande.commande?.burgerCommandes)
  //   //  this.serviceCommande.commande.burgerCommandes=this.panier?.burgers
  // }
}
