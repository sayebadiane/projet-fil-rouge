import { boissonTaille, menu } from "./boissonTaille"
import { Produit } from "./modelProduit"

export interface ComplementDetail{
    burgers?: Produit
    nbrBurger?:number
    menus?: menu
    nbrMenu?: number
    boissontailles?: boissonTaille[]
    portionfrites?: Produit[]
   
}