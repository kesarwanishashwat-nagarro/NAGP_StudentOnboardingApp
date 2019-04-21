import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IStudent } from 'src/app/core/model/models';
import { Observable } from 'rxjs';
import { StudentDataService } from '../student-data.service';

@Injectable()
export class StudentResolver implements Resolve<IStudent> {

  constructor(private _studentService: StudentDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IStudent | Observable<IStudent> | Promise<IStudent> {
    const id = route.params['id'];
    return  this._studentService.getSelectedStudent(id);
  }
}
