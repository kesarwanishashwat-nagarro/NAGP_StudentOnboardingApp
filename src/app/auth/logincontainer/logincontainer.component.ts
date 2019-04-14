import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUserLogon, UserLogOn } from 'src/app/core/model/models';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { timer, Observable, Subscription } from 'rxjs';
import { TrackAuthService } from 'src/app/core/track-auth.service';

@Component({
  selector: 'app-logincontainer',
  templateUrl: './logincontainer.component.html',
  styleUrls: ['./logincontainer.component.scss']
})
export class LogincontainerComponent implements OnInit,OnDestroy {
  user: IUserLogon;
  isLoginError: boolean;
  timerSubscription: Subscription;
  constructor(private _authService: AuthService,private _trackAuthService: TrackAuthService, private _router: Router) { }

  ngOnInit() {
    this.user = new UserLogOn();
    this.isLoginError = false;
  }

  logon() {
    this._authService.logon(this.user).subscribe((res: any[]) => {
      if(res.length){
        this._trackAuthService.setAuthentication(true);
        this._router.navigateByUrl('/');
      }
      else{
        this.isLoginError = true;
        this.user = new UserLogOn();
        const timer$ = timer(3000);
        this._trackAuthService.setAuthentication(false);
        this.timerSubscription = timer$.subscribe(() => this.isLoginError = false);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.timerSubscription){
      this.timerSubscription.unsubscribe();
    }
  }

}
