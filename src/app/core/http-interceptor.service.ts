import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MygoLoadingService } from './mygo-loading/mygo-loading.service';
import { MygoMessageService } from './mygo-message/mygo-message.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService {
  constructor(
    private mygoLoadingService: MygoLoadingService,
    private mygoMessageService: MygoMessageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    this.mygoLoadingService.showLoading();
    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          this.mygoLoadingService.hideLoading();
          this.handleError(err);
          return throwError(err);
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            this.mygoLoadingService.hideLoading();
          }
          return evt;
        })
      );
  }

  handleError(response) {
    if (response.status === 500) {
      if (response?.error?.errors) {
        this.mygoMessageService.showMessage(
          'error',
          response.error.errors.join(', ')
        );
      } else {
        this.mygoMessageService.showMessage(
          'error',
          'Erro de conexão com o servidor'
        );
      }
    } else if (response.status === 401) {
      localStorage.removeItem('token');
    }
  }
}
