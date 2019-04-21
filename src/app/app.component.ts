import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { TrackAuthService } from './core/track-auth.service';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  enableLoader: boolean;
  title = 'NAGP-StudentOnboarding';
  isLoggedIn: boolean;
  constructor(private _loader: LoaderService, private _trachAuth: TrackAuthService,private _router: Router){

  }
  ngOnInit(): void {
    this._loader.loader$.subscribe((flag) => Promise.resolve(null).then(() => this.enableLoader = flag));
    this._trachAuth.isAuthenticated$.subscribe( (auth) => {
      this.isLoggedIn = auth;
    });
    this._router.events.subscribe((routerEvent: any) => {
      this.checkRouterEvent(routerEvent);
    });
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
