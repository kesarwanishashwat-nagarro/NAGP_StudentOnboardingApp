import { Component, OnInit } from '@angular/core';
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
  constructor(private _router: Router, private _msgService: MessageService) { }

  ngOnInit() {
    this._msgService.message.subscribe((show) => {
      this.messageDesc = this._msgService.desc;
      this.showMessage = show;
    });
  }

  isActive(item) {
    const isActive = this.selectedItem === item || ( window && window.location.pathname.indexOf(item.link) >= 0);
    return isActive;
  }

  logout(){
    this._router.navigateByUrl('/login');
  }

}
