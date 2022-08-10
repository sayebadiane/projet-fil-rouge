import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplementDetail } from '../shared/models/complementDetail';
import { ComplementDetailService } from '../shared/services/complement-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details: ComplementDetail | undefined = undefined
  public p:number|null=null
  


  constructor(private service:ComplementDetailService,public route:ActivatedRoute) { }

  ngOnInit(): void {
  let  id = this.route.snapshot.paramMap.get('id');
    this.service.detail(id).subscribe(data => {
      this.details=data
      
    })
  }
  ok(): boolean{
    
    
   return true
  }
  valider(): void{
    alert("hum")
  }

  yell(e: any) {
    console.log("doul" + e[0])
    console.log("day" + e[1]);
    if (e[1] === "burger") {
      if (this.details) {
        this.details.nbrBurger = e[0];        
        if (this.service) {
          this.service.panier = this.details;
        }
      }
    }
    else if (e[1] === "menu") {
      if (this.details) {
        this.details.nbrMenu = e[0];
        if (this.service) {
          this.service.panier = this.details;
        }
      }
      
    }
  }

}
