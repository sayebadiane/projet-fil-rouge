import { Produit } from "./modelProduit"

export interface Commande {
    montant: number
    burgerCommandes?: menuburgers[]
    menuCommandes?:menuburgers[]
}
export interface objetMenuOuBurger{
    id?:number

}
export interface menuburgers {
    quantite?: number,
    burger?: Produit
  

}