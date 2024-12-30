import { Component } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {
  notesOpen: boolean = false;
  newNotesOpen: boolean = true;

  back() {
    this.notesOpen = true;
    this.newNotesOpen = false;
  }
}
