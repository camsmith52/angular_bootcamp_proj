import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SessionStorageService } from './services/session-storage.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(protected sessionStorageService: SessionStorageService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.sessionStorageService.setHttpLoggingDetails(req.url,req.headers,req.body)

    return next.handle(req).pipe(
      tap(event => {
        if(event.type===HttpEventType.Sent){
          console.log('Req sent');
        }
        if(event.type===HttpEventType.Response){
          console.log('Response:', event);
        }
      })
    );
  }
  }

