import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { IStudent } from '../core/model/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  studentAPI = 'students';
  documentsAPI = 'docs';
  isEdit: boolean;
  private _selectedStudent: IStudent;
  constructor(private _api: ApiService) { }

  getSelectedStudent(id?: number): Observable<IStudent> | Observable<any> {
    if (this._selectedStudent) {
      return of([this._selectedStudent]);
    } else {
      return this._api.get<IStudent>(this.studentAPI + '?id=' + id);
    }
  }

  setSelectedStudent(student: IStudent) {
    this._selectedStudent = student;
  }

  getAllStudents() {
    return this._api.get<IStudent[]>(this.studentAPI);
  }

  getAllDocuments() {
    return this._api.get(this.documentsAPI);
  }

  onBoardStudent(student: IStudent): Observable<IStudent> {
    return this._api.post<IStudent, IStudent>(this.studentAPI, student);
  }

  saveEditedStudent(id: number, student: IStudent): Observable<IStudent> {
    return this._api.put<IStudent, IStudent>(this.studentAPI + '/' + id, student);
  }

  deleteStudent(id: number): Observable<any>{
    return this._api.delete(this.studentAPI + '/' + id);
  }
}
