import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'interfaces/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private URL_API = 'https://jsonplaceholder.typicode.com/photos?_limit=5';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any[]> {
    return this.http.get<Photo[]>(this.URL_API);
  }
}
