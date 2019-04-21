import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { IStudent } from 'src/app/core/model/models';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { finalize } from 'rxjs/operators';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  studentList: IStudent[];
  private _studentList: IStudent[];
  showDeleteModal: boolean;
  selectedStudent: IStudent;
  name: string;
  searchText: string;
  showList: boolean;
  searchField: string;
  categories = ['Domestic', 'International'];
  constructor(private _studentService: StudentDataService,
    private _router: Router, private _loader: LoaderService,
    private _msgService: MessageService
    ) { }

  ngOnInit() {
    this._studentService.isEdit = false;
    if (window.localStorage.getItem('personName')) {
      this.name = window.localStorage.getItem('personName')
    }
    this.getStudents();
  }
  getStudents() {
    this._studentService.getAllStudents()
      .subscribe((response: IStudent[]) => {
        this.studentList = response;
        this._studentList = JSON.parse(JSON.stringify(this.studentList));
      });
  }

  viewStudentDetails(student: IStudent) {
    this.selectedStudent = student;
    this._studentService.isEdit = false;
    this._studentService.setSelectedStudent(student);
    this._router.navigateByUrl('student/onboard/' + student.id);
  }

  editStudentDetails(student: IStudent) {
    this._studentService.setSelectedStudent(student);
    this._studentService.isEdit = true;
    this._router.navigateByUrl('student/onboard/' + student.id);
  }

  intiateDeleteStudent(student: IStudent) {
    this.selectedStudent = student;
    this.showDeleteModal = true;
  }

  deleteStudent() {
    this.showDeleteModal = false;
    this._loader.show();
    this._studentService.deleteStudent(this.selectedStudent.id)
      .pipe(finalize(() => this._loader.hide()))
      .subscribe((data) => {
        this.getStudents();
        this._msgService.showMessage('Successfully Removed the student');
      });
  }

  onSearchChange(text: string) {
    this.searchText = text;
    this.searchField = 'name';
  }

  onFilterCategoryChanged(category) {
    this.studentList = this._studentList.filter((student) => student.category == category || category === 'ALL');
  }

}
