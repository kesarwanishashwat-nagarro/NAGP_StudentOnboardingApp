import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  windiw = window;
  menuItems = [{
    name: 'Dashboard',
    link: '/student/dashboard'
  }, {
    name: 'Onboard Students',
    link: '/student/onboard'
  }
  ]
  selectedItem;
  showLogoutModal: boolean;
  showMessage: boolean;
  messageDesc: string;
  @ViewChild('headerRef') headerRef;
  sticky;
  constructor(private _router: Router, private _msgService: MessageService) { }

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

  isActive(item) {
    const isActive = this.selectedItem === item || (window && window.location.pathname.indexOf(item.link) >= 0);
    return isActive;
  }

  logout() {
    this._router.navigateByUrl('/login');
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
