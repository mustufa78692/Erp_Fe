import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ServicesService } from "../services/services.service";

@Injectable({
  providedIn: "root",
})
export class LoggedInGuard implements CanActivate {
  constructor(private services: ServicesService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.services.tokenChecker()) return true;
    if (
      this.services.getRole() == "ROLE_ADMIN" ||
      this.services.getRole() == "MANAGER"
    )
      this.router.navigate(["/dashboard"]);
    else if (this.services.getRole() == "EMPLOYEE")
      this.router.navigate(["/personal"]);

    return false;
  }
}
