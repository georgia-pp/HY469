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

  messages = [
    {
      name: 'Tomas Heath',
      avatar: 'assets/user1.jpeg',
      message: 'Yes, Please',
      time: '2:34pm'
    },
    {
      name: 'Alaia Allison',
      avatar: 'assets/user2.jpg',
      message: 'Can We Add These...',
      time: '2:34pm'
    },
    {
      name: 'Sophia Welch',
      avatar: 'assets/user3.jpg',
      message: 'Thank You So...',
      time: '2:34pm'
    },
    {
      name: 'Erick French',
      avatar: 'assets/user4.jpg',
      message: 'I Prefer The Other...',
      time: '2:34pm'
    }
  ];
}
