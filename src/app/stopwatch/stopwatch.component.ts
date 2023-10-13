import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  minute = 0;
  hour = 0;
  second = 0;
  running = 'false';
  timer: any;

  backgroundImageUrls: string[] = [
    '../../assets/1.webp',
    '../../assets/2.jpg',
    '../../assets/4.jpg',
    '../../assets/5.jpg',
    '../../assets/6.jpg',
    '../../assets/7.jpg',
  ];
  currentImageIndex = 0;

  startimer() {
    if (this.running) {
      this.second++;
      if (this.second === 60) {
        this.second = 0;
        this.minute++;
        if (this.minute === 60) {
          this.minute = 0;
          this.hour++;
        }
      }
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImageUrls.length;
      const watch = document.querySelector('.watch') as HTMLElement;
      watch.style.backgroundImage = `url(${this.backgroundImageUrls[this.currentImageIndex]})`;

      this.timer = setTimeout(() => this.startimer(), 1000);
    }
  }

  start() {
    this.running = 'true';
    const preloadImage = new Image();
    preloadImage.src = this.backgroundImageUrls[this.currentImageIndex];
    this.startimer();
    console.log(this.timer);
  }

  stop() {
    this.running = 'false';
    clearTimeout(this.timer);
    console.log(this.hour, this.minute, this.second);
  }

  reset() {
    this.minute = 0;
    this.hour = 0;
    this.second = 0;
  }

  getCurrentImageUrl() {
    return this.backgroundImageUrls[this.currentImageIndex];
  }
}
