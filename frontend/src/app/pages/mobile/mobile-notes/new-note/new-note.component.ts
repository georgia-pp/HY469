import { Component } from '@angular/core';
import { NoteModel } from 'src/app/global/models/notes/note.model';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { NotesService } from 'src/app/global/services/notes/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {
  noteOpen: boolean = false;
  newNoteOpen: boolean = true;

  back() {
    this.noteOpen = true;
    this.newNoteOpen = false;
  }

  public category: string = '';
  public title: string = '';
  public context: string = '';
  public pin: boolean = false;

  constructor(
    private notesService: NotesService,
    private socketService: SocketsService
  ) { }

  public setCategory(category: string): void {
    this.category = category;
  }

  public postNote(): void {
    const note = new NoteModel();
    note.category = this.category;
    note.title = this.title;
    note.context = this.context;
    note.pin = this.pin;

    this.notesService.create(note).subscribe((result) => {
      this.category = '';
      this.title = '';
      this.context = '';
      this.pin = false;
      this.socketService.publish("notes_update", note);
    });
  }
}
