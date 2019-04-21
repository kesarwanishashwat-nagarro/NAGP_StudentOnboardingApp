import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { ApiService } from '../core/services/api.service';
import { IUserLogon } from '../core/model/models';
import { of } from 'rxjs/internal/observable/of';

const mockUser: IUserLogon  ={
  username : "testuser",
  password : "testpass",
  name: 'test'
}

const apiServiceStub = {
  get : jasmine.createSpy('get').and.returnValue(of([mockUser]))
}

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ApiService, useValue: apiServiceStub
      }]
  }));

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should logon with test user', inject([AuthService], (service: AuthService) => {
    service.logon(mockUser).subscribe(response => {
        expect(response).toEqual([mockUser]);
    });
}));

});
