import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../shared/models/boissonTaille';


@Component({
  selector: 'app-detailmenu',
  templateUrl: './detailmenu.component.html',
  styleUrls: ['./detailmenu.component.css']
})
export class DetailmenuComponent implements OnInit {
  @Input() menu: menu | undefined = undefined


  constructor() { }

  ngOnInit(): void {
  }

}
