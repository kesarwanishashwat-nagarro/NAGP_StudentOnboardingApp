import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { StudentDataService } from '../student-data.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { of } from 'rxjs';
import { IStudent, IOnboardDocuments } from 'src/app/core/model/models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchByPipe } from 'src/app/shared/pipes/search-by.pipe';


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
  }
}

const studentServiceStub = {
  isEdit: false,
  getAllStudents: jasmine.createSpy('getAllStudents').and.returnValue(of([mockStudent])),
  setSelectedStudent: jasmine.createSpy('setSelectedStudent'),
  deleteStudent: jasmine.createSpy('deleteStudent').and.returnValue(of([mockStudent]))
}

const msgServiceStub = {
  showMessage: jasmine.createSpy('showMessage')
}

const loaderStub = {
  show: jasmine.createSpy('show'),
  hide: jasmine.createSpy('hide')
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, SearchByPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StudentDataService, useValue: studentServiceStub },
        { provide: LoaderService, useValue: loaderStub },
        { provide: MessageService, useValue: msgServiceStub },
        {
          provide: Router,
          useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set and view selected student', () => {
    component.viewStudentDetails(mockStudent);
    expect(studentServiceStub.isEdit).toBeFalsy();
  });

  it('should set and edit selected student', () => {
    component.editStudentDetails(mockStudent);
    expect(studentServiceStub.isEdit).toBeFalsy();
  });

  it('should initiate delete student', () => {
    component.intiateDeleteStudent(mockStudent);
    expect(component.showDeleteModal).toBeTruthy();
  });

  it('should delete selected student', () => {
    component.selectedStudent = mockStudent;
    component.deleteStudent();
    expect(component.showDeleteModal).toBeFalsy();
  });

  it('should set search text on change', () => {
    component.onSearchChange('text');
    expect(component.searchText).toBe('text');
  });

  it('should set student list based on category', () => {
    component.onFilterCategoryChanged('Domestic');
    expect(component.studentList[0].name).toBe(mockStudent.name);
  });
});
