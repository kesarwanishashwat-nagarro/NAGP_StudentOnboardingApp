import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getData(key: string){
    const data = window.localStorage.getItem(key);
    if(data){
      return JSON.parse(data);
    }
    return false;
  }
  setData(key: string, value: any){
    if(!this.getData(key)){
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeData(key: string){
    window.localStorage.removeItem(key);
  }

  updateData(key: string, value: any){
    const data = window.localStorage.getItem(key);
    if(data){
      this.removeData(key);
    }
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
