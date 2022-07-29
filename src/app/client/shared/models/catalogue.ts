import { Produit } from "./modelProduit";

export interface Catalogue{
    menus: Produit[]
    burgers: Produit[]
    produits?:Produit[]
}