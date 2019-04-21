import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardComponent } from './student-card.component';
import { IStudent, IOnboardDocuments } from 'src/app/core/model/models';

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

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    component.cardData = mockStudent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should emit view click", () => {
    component.onViewClick();
    component.viewBtnClick.subscribe((val) => expect(val).toBe(mockStudent));
  });

  it("should emit edit click", () => {
    component.onEditClick();
    component.editBtnClick.subscribe((val) => expect(val).toBe(mockStudent));
  });

  it("should emit delete click", () => {
    component.onDeleteClick();
    component.deleteBtnClick.subscribe((val) => expect(val).toBe(mockStudent));
  });

});
