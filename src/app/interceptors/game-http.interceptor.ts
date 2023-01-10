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

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url;
        const keyUrlAppend = `key=${env.API_KEY}`;
        const modifiedReq = req.clone({
            url: url + keyUrlAppend
        })
        return next.handle(modifiedReq);
    }
}