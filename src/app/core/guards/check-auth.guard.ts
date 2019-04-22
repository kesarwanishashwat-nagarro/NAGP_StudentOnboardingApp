import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TrackAuthService } from '../track-auth.service';
import { Guid } from "guid-typescript";
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuard implements CanLoad {

  constructor(private _trackAuthService: TrackAuthService, private _router: Router) {

  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    const token = window.localStorage.getItem(Constants.localstorageKeys.appToken)
    if (this._trackAuthService.isAuthenticated || (token && Guid.isGuid(Guid.parse(token)))) {
      this._trackAuthService.setAuthentication(true);
      return of(true);
    }
    this._router.navigate([Constants.routes.login]);
    return of(false);
  }
}
