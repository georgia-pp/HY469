import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOpen: boolean = true;
  showCalendar: boolean = true;

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
    this.calendarOpen = !this.calendarOpen;
  }

  days = [
    { label: 'Thu', date: 17, active: false },
    { label: 'Fri', date: 18, active: true },
    { label: 'Sat', date: 19, active: false },
    { label: 'Sun', date: 20, active: false },
    { label: 'Mon', date: 21, active: false },
    { label: 'Tue', date: 22, active: false },
    { label: 'Wed', date: 23, active: false }
  ];

  tasks = [
    {
      time: '9:30am',
      title: 'Meeting',
      description: 'You have a meeting at room K218, with Peter W.'
    },
    {
      time: '9:30am',
      title: 'Call Doctor',
      description: "Call Emily's doctor to book an appointment for the 15th of November."
    }
  ];

  progress = 25; // Example progress percentage

  get progressOffset(): number {
    const circumference = 2 * Math.PI * 45;
    return circumference - (this.progress / 100) * circumference;
  }

  navigate(direction: number): void {
    console.log(`Navigating ${direction > 0 ? 'forward' : 'backward'}`);
    // Implement navigation logic here
  }

  selectDay(day: any): void {
    this.days.forEach(d => (d.active = false));
    day.active = true;
    console.log(`Selected day: ${day.label} ${day.date}`);
  }
}
