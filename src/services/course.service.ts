import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { throwError as observableThrowError } from 'rxjs'
import { ICourse } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = "assets/data/courses.json";

  constructor(private http: HttpClient) { };

  getCourses(): Observable<ICourse[]> {
    return this.http
      .get<ICourse[]>(this.url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message)
  }
}
