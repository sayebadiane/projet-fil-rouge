import { Produit } from "./modelProduit"

export interface Commande {
    montant: number
    burgerCommandes?: menuburgers[]
    menuCommandes?: menuburgers[]
    zone?: zone 
}

export interface menuburgers {
    quantite?: number,
    burger?: Produit | null
    menu?: Produit | null
   
  

}
export interface zone{
    id?:number
}