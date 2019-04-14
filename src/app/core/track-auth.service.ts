import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class TrackAuthService {
  _authenticated: boolean;
  constructor() { }

  get isAuthenticated(): boolean{
    return this._authenticated;
  }

  setAuthentication(auth: boolean){
    this._authenticated = auth;
    if(auth){
      const guid = Guid.create();
      window.localStorage.setItem('appToken', guid.toString());
    }
    else{
      window.localStorage.removeItem('appToken');
    }
  }
}
