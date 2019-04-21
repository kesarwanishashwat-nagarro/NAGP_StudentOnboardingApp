import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  desc: string;
  message: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  showMessage(desc: string){
    this.desc = desc;
    this.message.next(true);
  }

  hideMessage(){
    this.message.next(false);
  }
}
