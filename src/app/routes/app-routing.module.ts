import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from '../components/employees/employees.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { HomeComponent } from '../components/home/home.component';
import { ObservablesComponent } from '../observables/observables.component';
import { LodashComponent } from '../components/Lodash/Lodash.component';
import { FilterComponent } from '../components/filter/filter.component';
import { FilterPipeComponent } from '../components/filter-pipe/filter-pipe.component';
import { RouteGuardGuard } from '../guards/route-guard.guard';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';
import { AngularMaterialComponent } from '../components/angular-material/angular-material.component';
import { PaginationComponent } from 'app/components/pagination/pagination.component';
import { ParentCardComponent } from 'app/components/card/parent-card/parent-card.component';
import { ViewChildComponent } from 'app/components/view-child/view-child.component';
import { GuardsComponent } from 'app/components/guards/guards.component';

const routes: Routes = [
  { path: 'Employee', component: EmployeeComponent },
  { path: 'Employees', component: EmployeesComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'rxJS', component: ObservablesComponent },
  { path: 'Lodash', component: LodashComponent },
  {
    path: 'Filter',
    component: FilterComponent,
    canActivate: [RouteGuardGuard],
  },
  {
    path: 'FilterPipe',
    component: FilterPipeComponent,
    canActivate: [RouteGuardGuard],
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Autocomplete', component: AutocompleteComponent },
  { path: 'AngularMaterial', component: AngularMaterialComponent },

  // lazy load modules
  {
    path: 'Products',
    loadChildren: () =>
      import('../modules/products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'Graphs',
    loadChildren: () =>
      import('../modules/graphs/graphs.module').then(
        (module) => module.GraphsModule
      ),
  },
  { path: 'Pagination', component: PaginationComponent },
  { path: 'ParentCard', component: ParentCardComponent },
  { path: 'ViewChild', component: ViewChildComponent },
  { path: 'Guards', component: GuardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuardGuard],
})
export class AppRoutingModule {}
