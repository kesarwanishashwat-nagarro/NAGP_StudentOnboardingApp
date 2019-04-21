import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoaderShown: boolean;
  constructor() { }

  show(){
    this.isLoaderShown = true;
    this.loader$.next(true);
  }

  hide(){
    this.isLoaderShown = false;
    this.loader$.next(false);
  }
}
