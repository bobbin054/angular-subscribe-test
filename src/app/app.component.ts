import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, tap } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Create observable that emits three values
  myObservable: Observable<number> = of(1, 2, 3);
  // Create a observer that logs to the console.
  myObserver = {
    next: (x: number) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
  tapList: number[] = [];
  mapList: number[] = [];

  ngOnInit() {
    this.myObservable
      .pipe(
        tap((element) => {
          console.log('In tap. element: ', element);
          this.tapList.push(element);
        }),
        map((element, i) => {
          console.log('In map. mutating element * 2');
          const result= element * 2;
          this.mapList.push(result);
          return result;
        })
      )
      .subscribe(this.myObserver);

    //create observerable, subscribe, observer object.
    // of(1, 2, 3).subscribe({
    //   next: (x: number) => console.log('Observer got a next value: ' + x),
    //   error: (err: Error) => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // });
  }
}
