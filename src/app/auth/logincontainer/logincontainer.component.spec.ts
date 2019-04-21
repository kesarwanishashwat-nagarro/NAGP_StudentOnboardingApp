import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogincontainerComponent } from './logincontainer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrackAuthService } from 'src/app/core/track-auth.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IUserLogon } from 'src/app/core/model/models';
import { of } from 'rxjs/internal/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


const mockUserLogon: IUserLogon = {
  username: 'test',
  password: 'testpass',
  name: 'admin'
}
const trackAuthStub = {
  setAuthentication: jasmine.createSpy('setAuthentication').and.returnValue(of([]))
}

const authServiceStub = {
  logon: jasmine.createSpy('logon').and.returnValue(of([mockUserLogon]))
}


describe('LogincontainerComponent', () => {
  let component: LogincontainerComponent;
  let fixture: ComponentFixture<LogincontainerComponent>;
  let trackAuthService: TrackAuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogincontainerComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: TrackAuthService, useValue: trackAuthStub
        },
        {
          provide: AuthService, useValue: authServiceStub
        },
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigateByUrl'); }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincontainerComponent);
    component = fixture.componentInstance;
    trackAuthService = fixture.debugElement.injector.get(TrackAuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
