import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AutoService } from '../../shared/services/auto.service';
import { LoginService } from '../../shared/services/login.service';
import { NgToastService } from 'ng-angular-popup'
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  tok: string | undefined = undefined
  login="";
  password: string | undefined
  saye: any | undefined




  constructor(private service: LoginService, private serviceautho: AutoService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    
   
  }
  generationToken(): void{
    this.service.token(this.login, this.password).subscribe(data => {
      this.tok = data;
      
      this.serviceautho.token = data.token;
      console.log(data.token);
      if (data.token != '') {
        alert('connexion reussi');
        this.toast.success({detail:"SUCCESS",summary:"vous etes connecter"})
        this.router.navigate(['client'])
      }
   
    }, error => {
      this.toast.error({ detail: "error reussie", summary: "vous etes login ou mot de passe incorect", duration: 5000 })

      // alert('login ou mot de passe incorect')
    })
    
  }

}
