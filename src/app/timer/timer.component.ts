import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerValue: number = 0;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  running: boolean = false;
  timer: any;


  backgroundImageUrls: string[] = [
    '../../assets/1.webp',
    '../../assets/2.jpg',
    '../../assets/4.jpg',
    '../../assets/5.jpg',
    '../../assets/6.jpg',
    '../../assets/7.jpg',
  ];
  currentImageIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.hour = Math.floor(this.timerValue / 3600);
    this.minute = Math.floor((this.timerValue % 3600) / 60);
    this.second = this.timerValue % 60;
  }

  start() {
    this.running = true;
    this.timerValue = this.hour * 3600 + this.minute * 60 + this.second;
    this.startimer();
  }

  stop() {
    this.running = false;
    clearTimeout(this.timer);
    console.log(this.hour, this.minute, this.second);
  }

  reset() {
    this.timerValue = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
  }

  startimer() {
    if (this.running) {
      if (this.timerValue > 0) {
        this.currentImageIndex = this.timerValue % this.backgroundImageUrls.length;

        this.timerValue--;
        this.hour = Math.floor(this.timerValue / 3600);
        this.minute = Math.floor((this.timerValue % 3600) / 60);
        this.second = this.timerValue % 60;
        this.timer = setTimeout(() => this.startimer(), 1000);
      } else {
        this.running = false;
        this.showTimeOverAlert();
      }
    }
  }

  showTimeOverAlert() {
    alert('Time Over');
  }

  getCurrentImageUrl(): string {
    return this.backgroundImageUrls[this.currentImageIndex];
  }
}
