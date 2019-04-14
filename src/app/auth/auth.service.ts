import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { IUserLogon } from '../core/model/models';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _apiService: ApiService) { }

  logon(user: IUserLogon): Observable<IUserLogon[]> {
    const userId = window.btoa(user.username);
    const password = window.btoa(user.password);
    return this._apiService.get<IUserLogon[]>('auth?userid=' + userId + '&pwd=' + password);
  }
}
