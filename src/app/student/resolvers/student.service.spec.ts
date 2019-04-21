import { TestBed } from '@angular/core/testing';

import { StudentResolver } from './student.resolve';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentDataService } from '../student-data.service';
import { IStudent, IOnboardDocuments } from 'src/app/core/model/models';
import { of } from 'rxjs/internal/observable/of';


const mockStudent: IStudent = {
  name: 'testName',
  father_name: 'testfather',
  mother_name: 'testmother',
  last_score: 1,
  dob: new Date(),
  category: 'Domestic',
  documents: <IOnboardDocuments>{
    domicile: true,
    birth_certificate: true,
    marksheets: true,
    police_clearance: false,
    passport: false,
    declaration: true
  },
  id: 1
}

const studentServiceStub = {
  getSelectedStudent: jasmine.createSpy('getSelectedStudent').and.returnValue(of([mockStudent])),
}

describe('StudentResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [
      StudentResolver,
      { provide: StudentDataService, useValue: studentServiceStub }
    ]
  }));

  it('should be created', () => {
    const service: StudentResolver = TestBed.get(StudentResolver);
    expect(service).toBeTruthy();
  });
});
