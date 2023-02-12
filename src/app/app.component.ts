import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(private mediaObserver: MediaObserver) {}
  ngOnInit() {
    this.mediaSub = this.mediaObserver
      .asObservable() // New Way asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change: MediaChange) => {
        console.log(change.mqAlias);
        this.deviceXs = change.mqAlias === 'xs' ? true : false;
      });
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
