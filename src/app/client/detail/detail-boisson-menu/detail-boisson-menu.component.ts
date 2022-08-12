import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { boissonTaille } from '../../shared/models/boissonTaille';
import { menuTailles } from '../../shared/models/menuTailles';

@Component({
  selector: 'app-detail-boisson-menu',
  templateUrl: './detail-boisson-menu.component.html',
  styleUrls: ['./detail-boisson-menu.component.css']
})
export class DetailBoissonMenuComponent implements OnInit {
  @Input('menuboisson') menuboisson: menuTailles[] | undefined = undefined
  @Output() onYelle = new EventEmitter;



  constructor() { }

  ngOnInit(): void {
  }
  fontSizePx = 0;
  
  yell(e: any): void{
   
   this.onYelle.emit([this.menuboisson?.push])     
   
  
  }

}
