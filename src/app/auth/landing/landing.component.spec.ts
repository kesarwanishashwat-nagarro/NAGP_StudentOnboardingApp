import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { TrackAuthService } from 'src/app/core/track-auth.service';
import { LogincontainerComponent } from '../logincontainer/logincontainer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const serviceStub = {
  setAuthentication: jasmine.createSpy('setAuthentication')
}

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers : [
        { provide: TrackAuthService, useValue: serviceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
