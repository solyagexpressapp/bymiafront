import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * @method intercept
   * @param req
   * @param next
   */
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
        setHeaders: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjY0NTM3OTcsImV4cCI6MTYyNjU0MDE5Nywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InJvb3RAZ21haWwuY29tIiwiaXAiOiIxODkuMjAzLjEwMi4xOTcifQ.aAUGObIOsmMze_sRg0Itrf0k5cTGjeAye58c-E6unUMXqusLkGLQU-w_2XWRZjzl8Dqt9TkwhV1MWkGZzuxLaDS97PIxQZ5Tv2sfxDccPDH5AKiUugTmH6bNDoSCG5_MYGeIaUeGM4UcYHcHV1paBxp5mbXasP3quE231Y9dNRXaaTUphY2CqTflBRBCFNUSB9y_QYsFlKYRkHPowJ2HCb5Oey9QiBhkupwxUg6fhQweNFzzi8mRhmPt9k4k0ZCdxh8BWYDjbuG6edEXI3NDAKB1ruB6cFhFS2VpO24NLbMG27T240KvFho16TD737-wb1gHXY8eqeLDzJ8Xzqda_Q',
            //Authorization: 'Basic ' + btoa('username:password'),
        }
    });

    return next.handle(req);
  }
}
