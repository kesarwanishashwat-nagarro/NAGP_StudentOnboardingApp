import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StudentDataService } from '../student-data.service';

@Injectable()
export class DocumentsResolver implements Resolve<any> {
 
  constructor(private _studentService: StudentDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._studentService.getAllDocuments();
  }
}
