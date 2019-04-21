import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


const messageServiceStub = {
  message : of(true)
};

class TestComponent {}
const routerTestingParam = [
  { path: '', component: TestComponent },
  {
     path: 'student/dashboard',
     component: TestComponent
  },
  {
     path: 'student/onboard',
     component: TestComponent
  }];

  const navItem = {
    name: 'Dashboard',
    link: '/student/dashboard'
  }

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule.withRoutes(routerTestingParam) ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        {
          provide: MessageService,
          useValue: messageServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active item', () => {
    component.selectedItem = navItem;
    expect(component.isActive(navItem)).toBeTruthy();
  });
});
