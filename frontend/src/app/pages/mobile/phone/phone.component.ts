import { Component } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  constructor(private socketsService: SocketsService) { }

  lala() {
    this.socketsService.publish("lala", true);
  }
  homeOpen: boolean = true;
  clockOpen: boolean = false;
  tasksOpen: boolean = false;
  notesOpen: boolean = false;
  messagesOpen: boolean = false;

  toggleHome() {
    this.homeOpen = true;
    this.clockOpen = false;
    this.tasksOpen = false;
    this.notesOpen = false;
    this.messagesOpen = false;
  }
  toggleClock(){
    this.homeOpen = false;
    this.clockOpen = true;
    this.tasksOpen = false;
    this.notesOpen = false;
    this.messagesOpen = false;
  }
  toggleTasks(){
    this.homeOpen = false;
    this.clockOpen = false;
    this.tasksOpen = true;
    this.notesOpen = false;
    this.messagesOpen = false;
  }
  toggleNotes(){
    this.homeOpen = false;
    this.clockOpen = false;
    this.tasksOpen = false;
    this.notesOpen = true;
    this.messagesOpen = false;
  }
  toggleMessages(){
    this.homeOpen = false;
    this.clockOpen = false;
    this.tasksOpen = false;
    this.notesOpen = false;
    this.messagesOpen = true;
  }
}
