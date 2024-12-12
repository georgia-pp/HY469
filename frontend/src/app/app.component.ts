import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'frontend';

  showButton: boolean = false;
  menuOpen: boolean = false;
  calendarOpen: boolean = false;
  clockOpen: boolean = false;
  notesOpen: boolean = false;
  messagesOpen: boolean = false;
  calculatorOpen: boolean = false;
  docviewerOpen: boolean = false;
  picturesOpen: boolean = false;
  settingsOpen: boolean = false;
  relaxMode: boolean = false;
  alarmOpen: boolean = false;
  timerOpen: boolean = false;
  hourTransform = 'rotate(0deg)';
  minuteTransform = 'rotate(0deg)';
  secondTransform = 'rotate(0deg)';
  private intervalId: any;

  showCalendar: boolean = true;
  showMessage: boolean = true;

  daysOfWeek: { name: string, num: number }[] = [
    { name: 'Thu', num: 5 },
    { name: 'Fri', num: 6 },
    { name: 'Sat', num: 7 },
    { name: 'Sun', num: 8 },
    { name: 'Mon', num: 9 },
    { name: 'Tue', num: 10 },
    { name: 'Wed', num: 11 }
  ];

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
    this.calendarOpen = !this.calendarOpen;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;
    this.messagesOpen = !this.messagesOpen;
  }

  ngOnInit() {
    setTimeout(() => {
      this.showMessage = false;
      this.showButton = true;
    }, 3000);

    this.updateTime();
  }

  // Η συνάρτηση toggleMenu() αλλάζει την κατάσταση του menuOpen
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  open_calendar() {
    this.calendarOpen = !this.calendarOpen;
  }
  open_clock() {
    this.clockOpen = !this.clockOpen;
    this.alarmOpen = !this.alarmOpen;
    this.timerOpen = !this.timerOpen;

    if (this.clockOpen) {
      this.startClock();
    } else {
      this.stopClock();
    }
  }

  startClock(): void {
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  stopClock(): void {
    clearInterval(this.intervalId);
  }

  updateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.hourTransform = `rotate(${30 * hours + 0.5 * minutes}deg)`;
    this.minuteTransform = `rotate(${6 * minutes + 0.1 * seconds}deg)`;
    this.secondTransform = `rotate(${6 * seconds}deg)`;
  }
  open_notes() {
    this.notesOpen = !this.notesOpen;
  }
  open_messages() {
    this.messagesOpen = !this.messagesOpen;
  }
  open_calculator() {
    this.calculatorOpen = !this.calculatorOpen;
  }
  open_docviewer() {
    this.docviewerOpen = !this.docviewerOpen;
  }
  open_pictures() {
    this.picturesOpen = !this.picturesOpen;
  }
  open_settings() {
    this.settingsOpen = !this.settingsOpen;
  }
  relax_mode() {
    this.relaxMode = !this.relaxMode;
  }
}
