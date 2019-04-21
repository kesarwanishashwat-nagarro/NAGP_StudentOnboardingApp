import { TestBed } from '@angular/core/testing';

import { StudentResolver } from './student.resolve';

describe('StudentResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentResolver = TestBed.get(StudentResolver);
    expect(service).toBeTruthy();
  });
});
