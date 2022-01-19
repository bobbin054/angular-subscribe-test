import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  // Create simple observable that emits three values
  private _myObservable: Observable<number> = of(1, 2, 3);

  constructor() {}

  ngOnInit() {
    // declareing the observer by itself.
    const myObserver = {
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    of(1, 2, 3).subscribe({
      next: (x) => console.log(typeof x + ' ' + x),
      complete: () => {
        console.log("Now I'm done.");
        console.log('');
      },
    });

    from([
      'hello 1',
      1,
      'hello 3',
      'hello 4',
      'hello 5',
      'hello 6',
      'hello 7',
      'hello 8',
      2.3
    ]).subscribe({
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }
}
