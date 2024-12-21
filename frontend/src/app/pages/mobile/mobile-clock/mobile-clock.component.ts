import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-clock',
  templateUrl: './mobile-clock.component.html',
  styleUrls: ['./mobile-clock.component.scss']
})
export class MobileClockComponent {
  activeTab: string = 'clock'; // Default tab

  // Alarm Data
  alarms = [
    { time: '5:00 AM', enabled: false },
    { time: '7:00 AM', enabled: true },
    { time: '7:30 AM', enabled: false }
  ];

  // Timer Data
  timer = new Date(0, 0, 0, 0, 0, 0);
  timerInterval: any;

  // Clock Logic
  ngOnInit() {
    setInterval(() => {
      const now = new Date();
      const hour = now.getHours() % 12;
      const minute = now.getMinutes();
      const second = now.getSeconds();

      const hourDeg = (hour * 30) + (minute / 2);
      const minuteDeg = minute * 6;
      const secondDeg = second * 6;

      document.querySelector('.hand.hour')?.setAttribute('style', `transform: rotate(${hourDeg}deg)`);
      document.querySelector('.hand.minute')?.setAttribute('style', `transform: rotate(${minuteDeg}deg)`);
      document.querySelector('.hand.second')?.setAttribute('style', `transform: rotate(${secondDeg}deg)`);
    }, 1000);
  }

  // Tab Navigation
  setTab(tab: string) {
    this.activeTab = tab;
  }

  // Timer Logic
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer.setSeconds(this.timer.getSeconds() + 1);
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.timer = new Date(0, 0, 0, 0, 0, 0);
    clearInterval(this.timerInterval);
  }
}
