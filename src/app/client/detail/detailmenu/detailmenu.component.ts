import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { menu } from '../../shared/models/boissonTaille';


@Component({
  selector: 'app-detailmenu',
  templateUrl: './detailmenu.component.html',
  styleUrls: ['./detailmenu.component.css']
})
export class DetailmenuComponent implements OnInit {
  @Input() menu: menu | undefined = undefined
  @Output() onYelle = new EventEmitter;

   


  constructor() { }

  ngOnInit(): void {
  }
  yell(e: any) {
    
    this.onYelle.emit([e, 'menu']);
  }
  fontSizePx = 1;
}
