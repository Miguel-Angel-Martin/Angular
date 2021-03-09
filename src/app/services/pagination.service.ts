import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../interfaces/pagination';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private URL_API = 'https://jsonplaceholder.typicode.com/todos/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<IPagination[]> {
    return this.http
      .get<IPagination[]>(this.URL_API)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message);
  }
}

// https://jsonplaceholder.typicode.com/todos/
