import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardComponent } from './onboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDataService } from '../student-data.service';
import { MessageService } from 'src/app/core/services/message.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { IStudent, IOnboardDocuments } from 'src/app/core/model/models';
import { of } from 'rxjs';


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

const docOptions = [
  {
    id: 1,
    name: "Domicile",
    category: "both"
  },
  {
    id: 2,
    name: "Marksheets",
    category: "both"
  },
  {
    id: 3,
    name: "Birth Certificate",
    category: "both"
  },
  {
    id: 6,
    name: "Police Clearance",
    category: "International"
  },
  {
    id: 6,
    name: "Passport",
    category: "International"
  },
  {
    id: 6,
    name: "Declaration",
    category: "both"
  }
]

const studentServiceStub = {
  isEdit: false,
  onBoardStudent: jasmine.createSpy('onBoardStudent').and.returnValue(of([mockStudent])),
  saveEditedStudent: jasmine.createSpy('saveEditedStudent').and.returnValue(of([mockStudent]))
}

const messageServiceStub = {
  showMessage: jasmine.createSpy('showMessage')
}

describe('OnboardComponent', () => {
  let component: OnboardComponent;
  let fixture: ComponentFixture<OnboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, BsDatepickerModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StudentDataService, useValue: studentServiceStub },
        { provide: MessageService, useValue: messageServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form to onboard student', () => {
    const service: StudentDataService = TestBed.get(StudentDataService);
    component.documentOptions = docOptions;
    component.onSubmit(false);
    expect(service.onBoardStudent).toHaveBeenCalled();
  });

  it('should submit the form to update student', () => {
    const service: StudentDataService = TestBed.get(StudentDataService);
    component.documentOptions = docOptions;
    component.studentData = mockStudent;
    component.onSubmit(true);
    expect(service.saveEditedStudent).toHaveBeenCalled();
  });

  it('should set documents based on category', () => {
    component.onSelectChanged({ target: { value: mockStudent.category } });
    expect(component.selectedCategory).toBe('Domestic');
  });

});
