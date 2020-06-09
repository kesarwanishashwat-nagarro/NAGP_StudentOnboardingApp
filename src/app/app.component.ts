import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { TrackAuthService } from './core/track-auth.service';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
import { MessageService } from './core/services/message.service';
import { Ng2DeviceService } from 'ng2-device-detector';
import * as DeviceDetector from "device-detector-js";
import { DeviceDetectorResult } from 'device-detector-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  enableLoader: boolean;
  title = 'NAGP-StudentOnboarding';
  isLoggedIn: boolean;
  isHeaderStick: boolean;
  constructor(private _loader: LoaderService, private _trackAuth: TrackAuthService,
    private _router: Router, private _msgService: MessageService,private deviceDetectorService: Ng2DeviceService){

  }
  ngOnInit(): void {
    this._loader.loader$.subscribe((flag) => Promise.resolve(null).then(() => this.enableLoader = flag));
    this._trackAuth.isAuthenticated$.subscribe( (auth) => {
      this.isLoggedIn = auth;
    });
    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(this.deviceDetectorService.userAgent);
    let res = 'userAgent: ' + this.deviceDetectorService.userAgent + '\n';
    res = this.readObject(device, res);
    alert(res);
    this._router.events.subscribe((routerEvent: any) => {
      this.checkRouterEvent(routerEvent);
    });
    this._msgService.headerSticked.subscribe((isStick) => this.isHeaderStick = isStick);
  }

  private readObject(device: DeviceDetectorResult, res: string) {
    for (let key in device) {
      if(device[key] instanceof Object){
        res += key + ': \n';
        res = this.readObject(device[key], res);
      }else{
        res += key + ': ' + device[key] + '\n';
      }
    }
    return res;
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.enableLoader = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.enableLoader = false;
    }
  }

}
