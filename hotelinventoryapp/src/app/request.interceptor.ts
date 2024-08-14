import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export const requestInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log('Request is ', req);
//   return next(req);
// };

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    console.log('Request is ', req);
    if (req.method === 'POST') {
      const newRequest = req.clone({
        headers: new HttpHeaders({
          token: '12345dhvhd30930',
        }),
      });
      return next.handle(newRequest);
    }
    return next.handle(req);
  }
}
