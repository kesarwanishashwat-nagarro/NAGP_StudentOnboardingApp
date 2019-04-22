import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay, map, catchError, finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient, private _loader: LoaderService) { }
  baseUrl = environment.apiUrl;
  
  get<T>(url: string, params?: HttpParams) {
    this._loader.show();
    return this._http.get<T>(this.baseUrl + url, { params: params }).pipe(
      delay(2000),
      finalize(() => this._loader.hide()),
    );
  }

  post<S, T>(url: string, body: S) {
    this._loader.show();
    return this._http.post<T>(this.baseUrl + url, body).pipe(
      delay(1000),
      finalize(() => this._loader.hide()),
    );
  }

  put<S, T>(url: string, body: S) {
    this._loader.show();
    return this._http.put<T>(this.baseUrl + url, body).pipe(
      delay(1000),
      finalize(() => this._loader.hide()),
    );
  }

  delete<T>(url: string) {
    this._loader.show();
    return this._http.delete<T>(this.baseUrl + url).pipe(
      delay(1000),
      finalize(() => this._loader.hide()),
    );
  }
}
