import { TestBed } from '@angular/core/testing';

import { StudentDataService } from './student-data.service';
import { ApiService } from '../core/services/api.service';
import { of } from 'rxjs/internal/observable/of';
import { IStudent, IOnboardDocuments } from '../core/model/models';

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

const apiStub = {
  get: jasmine.createSpy('get').and.returnValue(of([mockStudent]))
}

describe('StudentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      {provide: ApiService, useValue: apiStub}
    ]
  }));

  it('should be created', () => {
    const service: StudentDataService = TestBed.get(StudentDataService);
    expect(service).toBeTruthy();
  });

  // it('should return Selected Student from API', () => {
  //   const service: StudentDataService = TestBed.get(StudentDataService);
  //   service.getSelectedStudent(1).subscribe((student) => expect(student.name).toBe(mockStudent.name));
  // });

  // it('should return Selected Student', () => {
  //   const service: StudentDataService = TestBed.get(StudentDataService);
  //   service.setSelectedStudent(mockStudent);
  //   service.getSelectedStudent(1).subscribe((student) => expect(student.name).toBe(mockStudent.name));
  // });
});
