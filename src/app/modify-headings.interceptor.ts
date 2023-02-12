import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ModifyHeadingsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (req.url.includes('wikipedia.org')) {
      return next.handle(req);
    }

    const modifiedReq = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + '345',
      }
    });
    return next.handle(modifiedReq);
  }
}
