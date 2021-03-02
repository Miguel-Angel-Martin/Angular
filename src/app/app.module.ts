import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';

import { CourseService } from '../services/course.service';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HighlightDirective } from '../directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModules } from '../services/material.module';
import { ObservablesComponent } from './observables/observables.component';
import { LodashComponent } from './Lodash/Lodash.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
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
  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
