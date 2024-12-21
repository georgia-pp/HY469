import { Component } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  week = [
    { short: 'Thu', date: 17, selected: false },
    { short: 'Fri', date: 18, selected: true },
    { short: 'Sat', date: 19, selected: false },
    { short: 'Sun', date: 20, selected: false },
    { short: 'Mon', date: 21, selected: false },
    { short: 'Tue', date: 22, selected: false },
    { short: 'Wed', date: 23, selected: false }
  ];

  tasks = [
    { title: 'Wakeup', time: '6:30am', description: 'Early wakeup from bed and fresh' },
    { title: 'Breakfast', time: '7:00am', description: 'Morning breakfast with bread and bananas' },
    { title: 'Go to work', time: '9:00am', description: 'Start now to go to your work on time' },
    { title: 'Meeting', time: '10:30am', description: 'Zoom call with the first client of the day' }
  ];
}
