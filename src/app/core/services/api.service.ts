import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  baseUrl = environment.apiUrl;
  get<T>(url: string, params?: HttpParams) {
    return this._http.get<T>(this.baseUrl + url, { params: params });
  }
}
