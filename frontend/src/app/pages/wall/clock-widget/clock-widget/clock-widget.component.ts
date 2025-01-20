import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'clock-widget',
  templateUrl: './clock-widget.component.html',
  styleUrls: ['./clock-widget.component.scss']
})
export class ClockWidgetComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  currentDay: string = '';
  currentMonth: string = '';
  currentDate: number = 0;
  date: string = '';
  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  day = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"]
  private intervalId: any;

  ngOnInit(): void {
    this.startClock();
    this.setupDate();
  }

  ngOnDestroy(): void {
    this.stopClock();
  }

  startClock(): void {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  stopClock(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateTime(): void {
    const newTime = new Date();
    this.currentTime = newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  }

  setupDate(): void {
    const d = new Date();
    this.currentDay = this.day[d.getDay()];
    this.currentMonth = this.month[d.getMonth()];
    this.currentDate = d.getDate();
    this.date += this.currentDay + ' ' + this.currentMonth + ' ' + this.currentDate.toString()
  }
}
