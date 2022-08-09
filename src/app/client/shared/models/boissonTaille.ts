import { menuBurgers } from "./menuBurger"
import { menuportionfrites } from "./menuportionfrites"
import { menuTailles } from "./menuTailles"
import { Produit } from "./modelProduit"
import { taille } from "./taille"

export interface boissonTaille {
    
    id?: number
    stoke?: number
    boisson: Produit
    taille:taille

}
export interface menu {

    id?: number
    nom?: string
    image?: Blob
    type?: string
    prix?:number
    menuBurgers: menuBurgers[]
    menuTailles: menuTailles[]
    menuPortionFrites: menuportionfrites[]
    
    

}