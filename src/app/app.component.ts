import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stopwatch';
  isStopWatchTabVisible = true; // Show the Stopwatch tab by default
  isTimerTabVisible = false;   // Hide the Timer tab by default

  showStopwatch() {
    this.isStopWatchTabVisible = true;
    this.isTimerTabVisible = false;
  }

  showTimer() {
    this.isStopWatchTabVisible = false;
    this.isTimerTabVisible = true;
  }

}
