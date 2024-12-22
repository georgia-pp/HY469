import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  // Notes array
  notes = [
    { title: 'Meeting', description: 'Team sync at 3 PM', color: '#ffcccb' },
    { title: 'Shopping', description: 'Buy groceries', color: '#ffff99' },
    { title: 'Work', description: 'Finish project report', color: '#ccffcc' },
    { title: 'Personal', description: 'Call Mom', color: '#add8e6' },
    { title: 'Appointment', description: 'Doctor at 5 PM', color: '#ffcccb' },
    { title: 'Gift', description: 'Buy Pandora ring', color: '#add8e6' },
  ];

  // Categories for filtering
  categories = [
    { name: 'Urgent', color: '#ffcccb' },
    { name: 'Work', color: '#ccffcc' },
    { name: 'Personal', color: '#add8e6' },
    { name: 'Reminder', color: '#ffff99' },
  ];

  // Filter state
  filteredNotes = this.notes;
  activeCategory: string | null = null;

  // Filter notes by category
  filterNotes(color: string) {
    this.filteredNotes = this.notes.filter((note) => note.color === color);
    this.activeCategory = color;
  }

  // Reset filter to show all notes
  resetFilter() {
    this.filteredNotes = this.notes;
    this.activeCategory = null;
  }
}
