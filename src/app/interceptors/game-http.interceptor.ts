import { 
    HttpEvent, 
    HttpHandler, 
    HttpHeaders, 
    HttpInterceptor, 
    HttpRequest 
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";

@Injectable()
export class GameHttpInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders().set('x-rapidapi-key', env.API_KEY)
        .set('x-rapidapi-host', 'whatoplay.p.rapidapi.com');

        const modifiedReq = req.clone({
            headers: headers
        })
        return next.handle(modifiedReq);
    }
}