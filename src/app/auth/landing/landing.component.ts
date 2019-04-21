import { Component, OnInit } from '@angular/core';
import { TrackAuthService } from 'src/app/core/track-auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private _trackAuth: TrackAuthService) { }

  ngOnInit() {
    this._trackAuth.setAuthentication(false);
  }

}
