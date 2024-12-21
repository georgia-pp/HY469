import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private socketsService: SocketsService){}

  showMessage: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.showMessage = false;
      this.showMessage = false;
      this.showButton = true;
    }, 3000);

    this.socketsService.subscribe("lala", (data:any)=>{
      console.log(data);
    })
  }

  showButton: boolean = false;
  menuOpen: boolean = false;
  
  calendarOpen: boolean = false;
  clockOpen: boolean = false;
  notesOpen: boolean = false;
  messagesOpen: boolean = false;
  calculatorOpen: boolean = false;
  docViewerOpen: boolean = false;
  filesOpen: boolean = false;
  settingsOpen: boolean = false;
  relaxOpen: boolean = false;
  alarmOpen: boolean = false;
  timerOpen: boolean = false;
  hourTransform = 'rotate(0deg)';
  minuteTransform = 'rotate(0deg)';
  secondTransform = 'rotate(0deg)';
  private intervalId: any;

  showCalendar: boolean = true;

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

  // Η συνάρτηση toggleMenu() αλλάζει την κατάσταση του menuOpen
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  open_calendar() {
    this.calendarOpen = !this.calendarOpen;
  }
  open_clock() {
    this.clockOpen = !this.clockOpen;
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
  open_docViewer() {
    this.docViewerOpen = !this.docViewerOpen;
  }
  open_files() {
    this.filesOpen = !this.filesOpen;
  }
  open_setting() {
    this.settingsOpen = !this.settingsOpen;
  }
  open_relax() {
    this.relaxOpen = !this.relaxOpen;
  }
}