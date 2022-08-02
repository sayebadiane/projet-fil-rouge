import { Component, Input, OnInit } from '@angular/core';
import { menuBurgers } from '../../shared/models/menuBurger';

@Component({
  selector: 'app-detail-menu-burger',
  templateUrl: './detail-menu-burger.component.html',
  styleUrls: ['./detail-menu-burger.component.css']
})
export class DetailMenuBurgerComponent implements OnInit {
  @Input() menuburger: menuBurgers[] | undefined = undefined


  constructor() { }

  ngOnInit(): void {
  }

}
