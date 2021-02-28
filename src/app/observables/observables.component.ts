import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, from, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  constructor() {}
  myArray = [10, 20, 30];
  public myArrayOf$: Observable<any>;
  public myArrayFrom$: Observable<any>;
  public myArrayMap$: Observable<any>;
  public myArrayTap$: Observable<any>;
  public numbers$: Observable<number> = interval(1000);
  public subject = new Subject<number>();

  ngOnInit() {
    //Create an observable from normal array
    this.myArrayOf$ = of(this.myArray);
    this.myArrayOf$.subscribe((data) => {
      console.log('Data Of: ' + data);
    });

    //promises are possible with from, no with of
    this.myArrayFrom$ = from(this.myArray);
    this.myArrayFrom$.subscribe((data) => console.log('Data From :' + data));

    //operator tap.no modifications in the arrow function
    this.myArrayTap$ = from(this.myArray);
    this.myArrayTap$
      .pipe(tap((data) => data))
      .subscribe((data) => console.log('Data Tap: ', data));

    // operator map you can modify the data before the iteration...
    this.myArrayMap$ = from(this.myArray);
    this.myArrayMap$
      .pipe(map((data) => data * 2))
      .subscribe((data) => console.log('Data Map Final: ', data));

    //subjects, multicast
    this.subject
      .pipe(tap((value) => console.log('Random value Subject: ' + value)))
      .subscribe();
    this.subject.next(Math.random());
    this.subject.next(Math.random());
    //write the subscription of the observable
    /* this.numbers$.subscribe((value) => {
      console.log('Result: ' + value);
    }); */
  }
}
