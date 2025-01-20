import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  convOpen: boolean = true;
  messagesOpen: boolean = false;

  back() {
    this.messagesOpen = true;
    this.convOpen = false;
  }

  messages = [
    { text: 'What Can You Tell Me About Your Latest Product?', timestamp: '15 Nov, 2:37pm', sent: false },
    {
      text: 'Our Latest Product, “Real-Time Collaboration”, Is A State-Of-The-Art Project Management Tool That Streamlines Team Collaboration.',
      timestamp: '15 Nov, 2:37pm',
      sent: true
    },
    { text: 'Can You Offer Any Discounts On Your Services?', timestamp: '15 Nov, 2:38pm', sent: false },
    { text: 'We Can Consider Offering A 10% Discount If You Commit To A One-Year Contract.', timestamp: '15 Nov, 2:39pm', sent: true }
  ];

  newMessage: string = '';

}
