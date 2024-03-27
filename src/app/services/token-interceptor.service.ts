import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { ServicesService } from "./services.service";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(ServicesService);
    const token = authService.getToken();
    if (token) {
      const req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      });

      return next.handle(req);
    }

    return next.handle(request);
  }
}
