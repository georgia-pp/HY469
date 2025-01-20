import { Component } from '@angular/core';

@Component({
  selector: 'calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.scss']
})
export class CalendarWidgetComponent {
  tasks: Task[] = [
    {
      time: '21:30am',
      title: 'Meeting with Team',
      description: 'You have a meeting at ro.',
      completed: false
    },
    {
      time: '9:30am',
      title: 'Meeting with Team',
      description: 'This is completed.',
      completed: true
    },
    {
      time: '22:30am',
      title: 'Meeting with Team',
      description: 'You have a meeting at ro.',
      completed: false
    },
    {
      time: '13:30pm',
      title: 'Apointment with doctor Papadakis',
      description: "his is completed.",
      completed: true
    }
  ];


}

export interface Task {
  time: string;
  title: string;
  description: string;
  completed: boolean;
}