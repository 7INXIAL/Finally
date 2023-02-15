import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { catchError, Observable, retry, tap } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class MajorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Max_Retry = 2;
    let count = 0;
    /**
     * 请求头优化
     */
    const request = req.clone({
      setHeaders: {
        // 'Access-Control-Allow-Origin': '*',
        koko: '2232',
      },
    });

    /**
     * 响应优化
     */
    return next.handle(request).pipe(
      catchError((err, retry) => {
        /**
         * 请求失败重新请求一次
         */
        // err{
        //   status,
        //   ....
        // }
        count++;
        if (count < Max_Retry) {
          return retry;
        } else {
          console.log('错误处理');
          throw err;
        }
      })
    );
  }
}
