import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Photo } from 'interfaces/photo';
import { PhotosService } from '@services/photos.service';
@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css'],
})
export class AngularMaterialComponent implements OnInit {
  constructor(public photoService: PhotosService) {}
  albumsId = [1, 2, 3];

  photos: Photo[] = [];

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photos) => {
      console.log(photos);
      this.photos = photos;
    });
  }

  saveNewPhoto(
    title: HTMLInputElement,
    albumId: HTMLSelectElement,
    url: HTMLInputElement
  ) {
    console.log(title.value, albumId.value, url.value);
    return false;
  }

  something() {
    alert('Works!');
  }
}
