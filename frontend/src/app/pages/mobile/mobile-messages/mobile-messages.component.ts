import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-messages',
  templateUrl: './mobile-messages.component.html',
  styleUrls: ['./mobile-messages.component.scss']
})
export class MobileMessagesComponent {
  messagesOpen: boolean = true;
  chatOpen: boolean = false;

  messages = [
    {
      name: 'Tomas Heath',
      avatar: 'assets/images/user1.png',
      message: 'Yes, Please',
      time: '2:34pm'
    },
    {
      name: 'Alaia Allison',
      avatar: 'assets/images/user2.png',
      message: 'Can We Add These...',
      time: '2:34pm'
    },
    {
      name: 'Sophia Welch',
      avatar: 'assets/images/user3.png',
      message: 'Thank You So...',
      time: '2:34pm'
    },
    {
      name: 'Erick French',
      avatar: 'assets/images/user4.png',
      message: 'I Prefer The Other...',
      time: '2:34pm'
    }
  ];

  toggleChat(){
    this.messagesOpen = false;
    this.chatOpen = true;
  }
}
