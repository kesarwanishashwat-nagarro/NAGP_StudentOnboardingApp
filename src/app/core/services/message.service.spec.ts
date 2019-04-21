import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('should show message', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.showMessage('');
    service.message.subscribe((flag) => expect(flag).toBeTruthy());
  });

  it('should hide message', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.hideMessage();
    service.message.subscribe((flag) => expect(flag).toBeFalsy());
  });

});
