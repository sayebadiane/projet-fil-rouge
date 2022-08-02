import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplementDetail } from '../shared/models/complementDetail';
import { ComplementDetailService } from '../shared/services/complement-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details: ComplementDetail| undefined = undefined


  constructor(private service:ComplementDetailService,public route:ActivatedRoute) { }

  ngOnInit(): void {
  let  id = this.route.snapshot.paramMap.get('id');
    this.service.detail(id).subscribe(data => {
      this.details=data
      console.log(this.details)
      
    })
  }

}
