import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  togol(a: string): void{
    if (a == 'menu') {
      alert("ok")

    } if (a == 'burger') {
      
    }
    
  }

}
