import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { OnboardComponent } from './onboard/onboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentCardComponent } from './student-card/student-card.component';
import { SharedModule } from '../shared/shared.module';
import { DocumentsResolver } from './resolvers/documents.resolve';
import { StudentResolver } from './resolvers/student.resolve';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
  declarations: [DashboardComponent, OnboardComponent, StudentCardComponent, FilterBarComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule
  ],
  providers: [
    DocumentsResolver,
    StudentResolver
  ]
})
export class StudentModule { }
