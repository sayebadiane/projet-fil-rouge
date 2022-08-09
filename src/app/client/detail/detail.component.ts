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
      }
         }
  }

}
