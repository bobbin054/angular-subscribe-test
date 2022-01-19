import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'subWithObservable',
  templateUrl: './subWithObservable.component.html',
  styleUrls: ['./subWithObservable.component.css'],
})
export class SubComponent implements OnInit {
  // Create simple observable that emits three values
  private _myObservable: Observable<number> = of(1, 2, 3);
  private _myArray: string[] = [
    'hello 1',
    'hello 2',
    'hello 3',
    'hello 4',
    'hello 5',
  ];
  private _myObservable2: Observable<string> = from(this._myArray);

  constructor() {}

  ngOnInit() {
    // Create observer object
    const myObserver = {
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // Execute with the observer object
    this._myObservable2.subscribe(myObserver);
  }
}
