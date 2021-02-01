import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , pipe} from "rxjs";
import { map, filter, tap } from 'rxjs/operators'
import { BasicAuthenticationService } from "../service/basic-authentication.service";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{

    constructor(private basicAuthenticationService : BasicAuthenticationService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("Interceptor is called");
        console.log("Called URL -> "+req.url);
        
    //     let username='myapplication';
    // let password='mypassword';
    // let basicAuthHeader= 'Basic ' + window.btoa(username + ':' + password);
    // let header=new HttpHeaders({
    //   Authorisation : basicAuthHeader 
    // });


        // let username='myapplication';
        // let password='mypassword';
        // let basicAuthHeader= 'Basic ' + window.btoa(username + ':' + password);
        // req = req.clone({
        //     setHeaders :{Authorisation: basicAuthHeader, Access-Control-Allow-Origin: 'http://localhost:4200'}
        // });

        let username = this.basicAuthenticationService.getAuthenticatedUser();
        let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();

        if (username && basicAuthHeaderString) {
            req = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:4200',
                    'Authorization': basicAuthHeaderString
                })
            });
        }
        return next.handle(req);

        // return next.handle(authReq).pipe(
        //     map((event: HttpEvent<any>) => {
        //         if (event instanceof HttpResponse) {
        //             console.log('event--->>>', event);
        //             console.log(event);
        //         }
        //         return event;
        //     }));
    }
}