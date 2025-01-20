import { Component } from '@angular/core';

@Component({
  selector: 'notification-widget',
  templateUrl: './notification-widget.component.html',
  styleUrls: ['./notification-widget.component.scss']
})
export class NotificationWidgetComponent {
  showNotification: boolean = false;
  emailReceived: boolean = true;
  unreadEmails: number = 2;
  unreadMessages: number = 6;

  notification: {
    type: string,
    subject: string,
    sender: string,
    content: string
  } = {
    type: "email",
      subject: "Meeting tomorow",
      sender: "Ioannis Papadopoulos",
      content: "Dear collegues, there will be a team meeting tomorow in order to discuss the project requirments and "
    };
}
