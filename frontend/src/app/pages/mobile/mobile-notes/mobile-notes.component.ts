import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-notes',
  templateUrl: './mobile-notes.component.html',
  styleUrls: ['./mobile-notes.component.scss']
})
export class MobileNotesComponent {
  notesOpen: boolean = true;
  newNotesOpen: boolean = false;

  newNotes() {
    this.notesOpen = false;
    this.newNotesOpen = true;
  }

  notes = [
    {
      title: 'Project A',
      content: [
        'Call client',
        'Write any notes or specifications',
        'Make the presentation for the pitch',
        'Sent it to the client'
      ]
    },
    {
      title: 'Laundry',
      content: ['Pick up the laundry on 22th of November, at 8:00am']
    },
    {
      title: 'Meeting',
      content: [
        'Meeting with the team on 1st of December, to discuss for the new project'
      ]
    },
    {
      title: 'Presentation',
      content: [
        'Remove slide 37',
        'Change the photo: slide 23',
        'Rewrite slide 68',
        'Be careful on'
      ]
    },
    {
      title: 'Groceries',
      content: ['Eggs', 'Cheese', 'Milk', 'Bread', 'Toilet Paper', 'Wine']
    },
    {
      title: 'Password',
      content: ['Work password: 1234!WORK']
    }
  ];
}
