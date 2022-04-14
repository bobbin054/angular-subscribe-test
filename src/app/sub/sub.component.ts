import { Component, OnInit } from "@angular/core";
import { from, Observable, of } from "rxjs";

@Component({
  selector: "sub",
  templateUrl: "./sub.component.html",
  styleUrls: ["./sub.component.css"],
})
export class SubComponent implements OnInit {
  // Create simple observable that emits three values
  private _myObservable: Observable<number> = of(1, 2, 3);

  constructor() {}

  ngOnInit() {
    // declaring the observer by itself.
    const myObserver = {
      next: (x: number) => console.log("Observer got a next value: " + x),
      error: (err: Error) => console.error("Observer got an error: " + err),
      complete: () => console.log("Observer got a complete notification"),
    };

    //using the pre-declared observer.
    of(1, 2, 3).subscribe(myObserver);
    
    //using subscribe and passing an observer object.
    of(1, 2, 3).subscribe({
      next: (x: number) => console.log("Observer got a next value: " + x),
      error: (err: Error) => console.error("Observer got an error: " + err),
      complete: () => console.log("Observer got a complete notification"),
    });

    from([
      "hello 1",
      1,
      "hello 3",
      "hello 4",
      "hello 5",
      "hello 6",
      "hello 7",
      "hello 8",
      2.3,
    ]).subscribe({
      next: (x: string) => console.log("Observer got a next value: " + x),
      error: (err: Error) => console.error("Observer got an error: " + err),
      complete: () => console.log("Observer got a complete notification"),
    });
  }
}
