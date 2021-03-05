import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-lodash',
  templateUrl: './Lodash.component.html',
  styleUrls: ['./Lodash.component.css'],
})
export class LodashComponent {
  rating: string;
  movieExist: boolean;
  movieNotExist: boolean;
  hellos = [];
  movies = [
    { name: 'Batman Begins', rating: 8.2 },
    { name: 'Insomnia', rating: 7.1 },
    { name: 'Doodlebug', rating: 7.1 },
    { name: 'Test', rating: 2 },
  ];

  names = ['Angular', 'Ionic', 'React', 'Vue', 'Fluter'];

  moviesByRating: any;
  removeName: any;
  sortedNums = [11, 13, 21, 3, 3, 15, 18, 8, 13];

  constructor() {
    const findValue = _.find(this.movies, (movie) => (movie.rating = 7.1));
    console.log(findValue);

    this.movieExist = !!_.find(this.movies, { name: 'Batman Begins' });

    this.movieNotExist = !!_.find(this.movies, { name: 'ABABAB' });

    console.log(_.times(3, String));
    console.log(_.times(4, _.constant('edupala')));

    _.debounce(this.callMethods, 5000)();

    _.set(this.names, '4', 'Bootstrap');

    console.log(this.names);
    console.log('Get movie name', _.get(this.movies, 'name', 'Doodlebug'));
    console.log(_.keyBy(this.movies, 'rating'));

    const reducedMovie = _.reduce(
      this.movies,
      (result, movie) => {
        if (movie.rating >= 7 && movie.rating <= 9.1) {
          (result[movie.rating] || (result[movie.rating] = [])).push(movie);
        }

        return result;
      },
      {}
    );

    console.log('Reduce : ', reducedMovie);
    const copy = _.cloneDeep(this.movies);
    console.log('This copy method of lodash : ' + copy);
    console.log('Sort and remove duplicate', _.sortedUniq(this.sortedNums));
  }

  findMoviesByRating(rating): void {
    this.moviesByRating = _.filter(
      this.movies,
      (movie) => movie.rating > rating
    );
  }

  removeItem(item: string): void {
    this.names = _.pull(this.names, item);
    console.log(this.names);
  }

  callMethods(): void {
    alert('Call after 5 second');
  }

  render() {
    _.times(2, () => {
      this.hellos.push('Hello');
      console.log('render', this.hellos);
    });
    _.range(4);
    console.log(_.range(4));

    // return this.hellos;
  }
} // end of class
