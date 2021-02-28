import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables.component';
import { LodashComponent } from './Lodash/Lodash.component';

const routes: Routes = [
  { path: 'Employee', component: EmployeeComponent },
  { path: 'Employees', component: EmployeesComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'rxJS', component: ObservablesComponent },
  { path: 'Lodash', component: LodashComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
