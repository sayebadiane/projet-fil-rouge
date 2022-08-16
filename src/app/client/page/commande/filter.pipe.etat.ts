import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from '../../shared/models/commande';

@Pipe({
    name: 'FilterPipe',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: Commande[], filtreEtat:string): any {
        if (!items || !filtreEtat) {
            return items
        }
        return items.filter(item => item.etat?.toLowerCase().indexOf(filtreEtat.toLowerCase()) !==-1);
    }
}
@Pipe({
    name: 'FilterPipeDate',
    pure: false
})


export class FilterPipeDate implements PipeTransform {
    transform(items: Commande[], filtreDate: any): any {
        if (!items || !filtreDate) {
            return items
        }
        return items.filter((item:any) => {
            const date = new Date(item.date)
            return date.toLocaleDateString() == new Date(filtreDate).toLocaleDateString()
        });
    }
}