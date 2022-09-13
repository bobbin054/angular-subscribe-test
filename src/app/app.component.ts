import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, tap } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Create observable that emits three values
  private _myObservable: Observable<number> = of(1, 2, 3);

  constructor() {}

  // Create a observer that logs to the console.
  _myObserver = {
    next: (x: number) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  ngOnInit() {
    // Sub to the observable using the observer.
    // this._myObservable.subscribe(this._myObserver);

    //using subscribe and passing an observer object.
    // of(1, 2, 3).subscribe({
    //   next: (x: number) => console.log('Observer got a next value: ' + x),
    //   error: (err: Error) => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // });

    of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(
        tap((element) => {
          console.log('tap =>', element);
        }),
        map((element, i) => {
          element = element / 2;
          return element * 10;
        })
      )
      .subscribe({
        next: (x: number) => console.log('sub next => ' + x),
        complete: () => {
          console.log('Done');
        },
      });

    // from([
    //   'msg 1',
    //   1,
    //   'msg 3',
    //   'msg 4',
    //   'msg 5',
    //   'msg 6',
    //   'msg 7',
    //   'msg 8',
    //   2.3,
    // ]).subscribe({
    //   next: (x: string) => console.log('Observer got a next value: ' + x),
    //   error: (err: Error) => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // });
  }
}
