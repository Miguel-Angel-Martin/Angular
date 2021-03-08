import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';

import { CourseService } from '../services/course.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HighlightDirective } from '../directives/highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModules } from '../services/material.module';
import { ObservablesComponent } from './observables/observables.component';
import { LodashComponent } from './components/Lodash/Lodash.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipeComponent } from './components/filter-pipe/filter-pipe.component';
import { InterceptorHTTP } from '../interceptors/interceptor-http.interceptor';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';

//graphs
import { ChartsModule } from 'ng2-charts';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginatePipe } from './pipes/paginate.pipe';
/**
 *
 */

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    FooterComponent,
    HighlightDirective,
    HomeComponent,
    HeaderComponent,
    ObservablesComponent,
    LodashComponent,
    FilterComponent,
    FilterPipe,
    FilterPipeComponent,
    AutocompleteComponent,
    AngularMaterialComponent,
    PaginationComponent,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LayoutModule,
    MaterialModules,
    AutocompleteLibModule,
    ChartsModule,
  ],
  providers: [
    CourseService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorHTTP, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
