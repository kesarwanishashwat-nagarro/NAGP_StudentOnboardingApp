import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardComponent } from './onboard/onboard.component';
import { DocumentsResolver } from './resolvers/documents.resolve';
import { StudentResolver } from './resolvers/student.resolve';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'onboard', component: OnboardComponent, resolve: { documents: DocumentsResolver }
  },
  {
    path: 'onboard/:id', component: OnboardComponent, resolve: { documents: DocumentsResolver, student: StudentResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
