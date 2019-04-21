import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  desc: string;
  message: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  headerSticked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  showMessage(desc: string) {
    this.desc = desc;
    this.message.next(true);
    const timer$ = timer(2000);
    timer$.subscribe(() => this.message.next(false));
  }

  hideMessage() {
    this.message.next(false);
  }
}
