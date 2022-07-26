import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap,map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DetailComponent } from '../../detail/detail.component';
import { ComplementDetail } from '../models/complementDetail';

@Injectable({
  providedIn: 'root'
})
export class ComplementDetailService {
  panier: ComplementDetail | undefined

  public url: string ='http://localhost:8000/api/complement_deatils'

  constructor(private http: HttpClient) {
    
  }
  detail(id:any) {
    return this.http.get<any>(`${this.url}/${id}`)

    
    
  }
}
