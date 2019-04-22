import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { IStudent } from '../core/model/models';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../core/services/local-storage.service';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { Constants } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  studentAPI = 'students';
  documentsAPI = 'docs';
  isEdit: boolean;
  private _selectedStudent: IStudent;
  constructor(private _api: ApiService, private local: LocalStorageService) { }

  getSelectedStudent(id?: number): Observable<IStudent> | Observable<any> {
    if (this._selectedStudent) {
      return of([this._selectedStudent]);
    } else {
      let students: IStudent[] = this.local.getData(this.studentAPI);
      if (students) {
        const localStudent = students.filter((student) => student.id == id)[0];
        return of([localStudent]);
      }
      else {
        return this._api.get<IStudent>(this.studentAPI + '?id=' + id);
      }
    }
  }

  setSelectedStudent(student: IStudent) {
    this._selectedStudent = student;
  }

  getAllStudents() {
    const students = this.local.getData(this.studentAPI);
    if (!students) {
      return this._api.get<IStudent[]>(this.studentAPI).pipe(map((data) => {
        this.local.setData(this.studentAPI, data)
        return data;
      }));
    }
    return of(students);
  }

  getAllDocuments() {
    return this._api.get(this.documentsAPI);
  }

  onBoardStudent(student: IStudent): Observable<IStudent> {
    let students = this.local.getData(this.studentAPI);
    if (!students) {
      students = [];
    }
    return this._api.post<IStudent, IStudent>(this.studentAPI, student).pipe(map((data) => {
      students.push(data);
      this.local.updateData(this.studentAPI, students);
      return student;
    }));
  }

  saveEditedStudent(id: number, student: IStudent): Observable<IStudent> {
    let students: IStudent[] = this.local.getData(this.studentAPI);
    if (!students) {
      students = [];
    }
    const localStudent = students.filter((student) => student.id === id)[0];
    const index = students.indexOf(localStudent);
    students.splice(index, 1);
    localStudent.id = id;
    students.splice(index, 0, localStudent);
    this.local.updateData(this.studentAPI, students);
    return this._api.put<IStudent, IStudent>(this.studentAPI + Constants.common.slash + id, student).pipe(catchError(() => {
      return of(student);
    }));
  }

  deleteStudent(id: number): Observable<any> {
    let students: IStudent[] = this.local.getData(this.studentAPI);
    if (!students) {
      students = [];
    }
    const localStudent = students.filter((student) => student.id === id)[0];
    const index = students.indexOf(localStudent);
    students.splice(index, 1);
    this.local.updateData(this.studentAPI, students);
    return this._api.delete(this.studentAPI + Constants.common.slash + id).pipe(catchError((d) => {
      return of(students);
    }));
  }
}
