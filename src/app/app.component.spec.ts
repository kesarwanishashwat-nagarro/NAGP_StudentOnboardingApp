import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { MessageService } from './core/services/message.service';
import { TrackAuthService } from './core/track-auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const msgServiceStub = {
  showMessage: jasmine.createSpy('showMessage'),
  headerSticked: new BehaviorSubject(false)
}

const loaderStub = {
  show: jasmine.createSpy('show'),
  hide: jasmine.createSpy('hide'),
  loader$: new BehaviorSubject(false)
}

const serviceStub = {
  setAuthentication: jasmine.createSpy('setAuthentication'),
  isAuthenticated$: new BehaviorSubject(true)
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers:[
        { provide: LoaderService, useValue: loaderStub },
        { provide: MessageService, useValue: msgServiceStub },
        { provide: TrackAuthService, useValue: serviceStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NAGP-StudentOnboarding'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NAGP-StudentOnboarding');
  });
});
