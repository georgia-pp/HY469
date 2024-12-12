import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messagesOpen: boolean = true;
  showMessage: boolean = true;

  toggleMessage() {
    this.showMessage = !this.showMessage;
    this.messagesOpen = !this.messagesOpen;
  }
}
