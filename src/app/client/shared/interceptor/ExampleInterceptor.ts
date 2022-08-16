import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AutoService } from '../services/auto.service';
import { Router } from '@angular/router';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {

    constructor(private serviveauto: AutoService,private router:Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request=request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`

                
            }
        })
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                }
            }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                      
                        this.router.navigate(['client/connexion']);
                    }
                }
            }
            )
        );
    }
}