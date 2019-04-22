import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { StudentDataService } from '../student-data.service';
import { ActivatedRoute } from '@angular/router';
import { IStudent, IOnboardDocuments, IDocument } from 'src/app/core/model/models';
import { BsDatepickerConfig, BsDaterangepickerDirective } from 'ngx-bootstrap';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _studentService: StudentDataService,
    private _route: ActivatedRoute, private _msgService: MessageService) { }

  bsConfig: Partial<BsDatepickerConfig>;
  @ViewChild('dp') datepicker: BsDaterangepickerDirective;
  colorTheme = 'theme-dark-blue'
  registrationForm: FormGroup;
  studentId: number
  studentData: IStudent;
  documentOptions: IDocument[];
  CategoryOptions = [
    { name: "Domestic", id: 1 },
    { name: "International", id: 2 }
  ];
  isEdit: boolean;
  id: number
  selectedCategory = this.CategoryOptions[1].name;
  isNoStudentFound: boolean;

  ngOnInit() {
    this.isNoStudentFound = false;
    this.documentOptions = this._route.snapshot.data['documents'];
    const resolvedStudent = this._route.snapshot.data['student'];
    this.id = this._route.snapshot.params['id'];
    if (resolvedStudent && resolvedStudent.length) {
      this.studentData = resolvedStudent[0];
      if(this.studentData){
        this.selectedCategory = this.studentData.category;
      }
    }
    const formDocumentControls = this.getDocumentControls(this.selectedCategory);
    this.registrationForm = this.formBuilder.group({
      documents: new FormArray(formDocumentControls),
      category: new FormControl(this.selectedCategory, Validators.required),
      name: new FormControl('', Validators.required),
      father_name: new FormControl('', Validators.required),
      mother_name: new FormControl('', Validators.required),
      last_score: new FormControl('', [Validators.required, Validators.min(40), Validators.max(100)]),
      dob: new FormControl('', Validators.required)
    });
    this.bsConfig = {
      containerClass: this.colorTheme,
      dateInputFormat: 'MMMM Do YYYY',
      maxDate: new Date(),
      value: this.studentData ? this.studentData.dob : new Date()
    }
    if(this.datepicker){
      this.datepicker.setConfig();
    }
    if (this.id) {
      if(this.studentData){
        this.isEdit = this._studentService.isEdit;
        this.fillStudentDetails(this.studentData);
        if (!this.isEdit) {
          this.registrationForm.disable();
        }
      }else{
        this.isNoStudentFound = true;
      }
    }
  }

  private getDocumentControls(category: string): FormControl[] {
    let docControls = [];
    if (this.documentOptions && category) {
      docControls = this.documentOptions.map((control, index) => {
        return control.category === 'both' || control.category === category ?
          new FormControl(this.registrationForm && this.registrationForm.value.documents[index], Validators.requiredTrue) :
          new FormControl(this.registrationForm && this.registrationForm.value.documents[index]);
      });
    }
    return docControls;
  }

  private fillStudentDetails(student: IStudent) {
    this.registrationForm.setValue({
      category: student.category || this.selectedCategory,
      name: student.name || '',
      father_name: student.father_name || '',
      mother_name: student.mother_name || '',
      last_score: student.last_score || 0,
      dob: student.dob || '',
      documents: this.getDocumentsList(student.documents)
    });
  }

  private getDocumentsList(documents: IOnboardDocuments): boolean[] {
    const docList = [];
    if (documents) {
      const keys = Object.keys(documents);
      keys.forEach((key) => docList.push(documents[key]));
    }
    return docList;
  }

  onSubmit(isEdit: boolean) {
    this.registrationForm.value.documents = this.mapCheckboxValues(this.documentOptions, this.registrationForm.value.documents);
    if (isEdit && this.studentData) {
      this._studentService.saveEditedStudent(this.studentData.id, this.registrationForm.value)
        .subscribe(() => {
          this._msgService.showMessage('Successfully updated the student');
          this.registrationForm.reset();
          window.scrollTo(0,0);
        });
    }
    else {
      this._studentService.onBoardStudent(this.registrationForm.value)
      .subscribe(() => {
        this._msgService.showMessage('Successfully added the student');
        this.registrationForm.reset();
        window.scrollTo(0,0);
      });
    }
  }

  mapCheckboxValues(source, dest) {
    const obj = {};
    source.map((val, index) => {
      obj[val.name] = dest[index];
    });
    return obj;
  }

  onSelectChanged(event) {
    this.selectedCategory = event.target.value
    const formDocumentControls = this.getDocumentControls(this.selectedCategory);
    this.registrationForm.setControl('documents', new FormArray(formDocumentControls));
  }

  onDateValueChange($event) {
    this.registrationForm.controls.dob.setValue($event.toLocaleDateString());
    this.registrationForm.controls.dob.markAsDirty();
  }

}
