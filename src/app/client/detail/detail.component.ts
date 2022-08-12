import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuburgers } from '../shared/models/commande';
import { ComplementDetail } from '../shared/models/complementDetail';
import { menuBurgers } from '../shared/models/menuBurger';
import { ComplementDetailService } from '../shared/services/complement-detail.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details: ComplementDetail | undefined = undefined
  public p: number | null = null
  


  constructor(private services: PanierService, private service: ComplementDetailService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.detail(id).subscribe(data => {
      this.details = data
      
    })
  }
  ok(): boolean {
    
    
    return true
  }
  valider(): void {
    alert("hum")
  }

  // yell(e: any) {
  //   console.log("doul" + e[0])
  //   console.log("day" + e[1]);
  //   if (e[1] === "burger") {
  //     if (this.details) {
  //       if (this.service) {
  //         if (this.details.burgers?.prix && e[0] && this.details.nbrBurger) {
  //           this.details.burgers.prix = e[0] * this.details.burgers.prix / this.details.nbrBurger;

  //         }
  //         this.details.nbrBurger = e[0];

  //         this.service.panier = this.details;
  //       }
  //     }
  //   }
  //   else if (e[1] === "menu") {
  //     if (this.details) {
  //       if (this.details.menus?.prix && e[0] && this.details.nbrMenu) {
  //         this.details.menus.prix =  (e[0] * this.details.menus.prix) / (this.details.nbrMenu);

  //       }
  //       this.details.nbrMenu = e[0];
       
  //       if (this.service) {
  //         this.service.panier = this.details;
  //       }
  //     }
      
  //   }
  // }

  
 
  // }
  yell(e: any) {
    console.log("douleeee" + e[0])
    console.log("dayeeeeeee" + e[1]);
    if (e[1] == 'burger') {
      if (this.details) {
        if (this.services) {
          if (this.details.burgers?.prix && e[0] && this.details.nbrBurger) {
            this.details.burgers.prix = e[0] * this.details.burgers.prix / this.details.nbrBurger;

          }
          this.details.nbrBurger = e[0];
          let bc: menuburgers = {
            quantite: this.details.nbrBurger,
            burger: this.details.burgers
          }
          let trouve=false
          this.services.panier.burgerCommandes?.map(
            burger => {
              if (burger.burger?.id == bc.burger?.id) {
                trouve = true
                if (trouve) {
                  if (burger.quantite && bc.quantite) {
                    burger.quantite = Number(burger.quantite + bc.quantite)
                  }
                }

              }

            }
          ); if (trouve==false) {
            this.services.addProd(bc, "burger")

            
          }

          // console.log(this.services.panier?.burgerCommandes)
          // }
        }
      }



    } else if (e[1] == 'menu') {
      if (this.details) {
        if (this.services) {
          if (this.details.menus?.prix && e[0] && this.details.nbrMenu) {
            this.details.menus.prix = e[0] * this.details.menus.prix / this.details.nbrMenu;

          }
          this.details.nbrMenu = e[0];
          let bc: menuburgers = {
            quantite: this.details.nbrMenu,
            burger: this.details.menus
          }



           let  trouve=false
          this.services.panier.menuCommandes?.map(
            burger => {
              if (burger.burger?.id == bc.burger?.id) {
                trouve = true
                if (trouve) {
                  if (burger.quantite && bc.quantite) {
                    burger.quantite = Number(burger.quantite + bc.quantite)
                  }
                }
               
              }

            }
          )
          if (trouve == false) {
            this.services.addProd(bc, "menu")

          }

          // console.log(this.services.panier?.burgerCommandes)
          // }
        }
      }

     

    }
      
  }
    
}