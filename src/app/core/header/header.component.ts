import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { INavItem } from '../model/models';
import { Constants } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  windiw = window;
  menuItems =  Constants.navItems;
  selectedItem;
  showLogoutModal: boolean;
  showMessage: boolean;
  messageDesc: string;
  @ViewChild('headerRef') headerRef;
  sticky;
  constructor(public _router: Router, private _msgService: MessageService) { }

  ngOnInit() {
    this._msgService.message.subscribe((show) => {
      this.messageDesc = this._msgService.desc;
      this.showMessage = show;
    });

    this.sticky = this.headerRef.nativeElement.offsetTop;
    window.onscroll = () => {
      this.scrollWindow();
    };
  }

  logout() {
    this._router.navigateByUrl(Constants.routes.login);
  }

  scrollWindow() {
    if (window.pageYOffset > this.sticky) {
      this.headerRef.nativeElement.classList.add("sticky");
      this._msgService.headerSticked.next(true);
    } else {
      this.headerRef.nativeElement.classList.remove("sticky");
      this._msgService.headerSticked.next(false);
    }
  }

}
