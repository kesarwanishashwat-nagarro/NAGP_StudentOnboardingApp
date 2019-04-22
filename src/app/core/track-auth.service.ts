import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackAuthService {
  _authenticated: boolean;
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  get isAuthenticated(): boolean {
    return this._authenticated;
  }

  setAuthentication(auth: boolean, name?: string) {
    this._authenticated = auth;
    if (auth) {
      const guid = Guid.create();
      window.localStorage.setItem('appToken', guid.toString());
      if(name){
        window.localStorage.setItem('personName', name);
      }
    }
    else {
      window.localStorage.clear();
    }
    this.isAuthenticated$.next(auth);
  }
}
