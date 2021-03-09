import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker/locale/de_AT';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.css'],
})
export class ParentCardComponent implements OnInit {
  constructor(private _http: HttpClient) {}
  _news: INews[] = [];

  ngOnInit() {
    this._http
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe((_news: INews[]) => {
        _news.forEach((oneNew) => {
          this._news.push({
            ...oneNew,
            author: faker.name.findName(),
            url: `https://news.es/${oneNew.title.replace(/ /g, ' - ')}`,
          });
        });
        console.log('News Array: ', this._news);
      });
  }
}

export interface INews {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
  url: string;
}
