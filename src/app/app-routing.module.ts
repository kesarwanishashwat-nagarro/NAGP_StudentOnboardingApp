import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckAuthGuard } from './core/guards/check-auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'student', pathMatch: 'full'
  },
  {
    path: 'student', 
    canLoad: [CheckAuthGuard],
    loadChildren: './student/student.module#StudentModule'
  },
  {
    path: 'login', loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
