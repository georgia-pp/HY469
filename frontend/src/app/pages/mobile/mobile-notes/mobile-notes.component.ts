import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/global/models/notes/note.model';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { NotesService } from 'src/app/global/services/notes/note.service';

@Component({
  selector: 'app-mobile-notes',
  templateUrl: './mobile-notes.component.html',
  styleUrls: ['./mobile-notes.component.scss']
})
export class MobileNotesComponent implements OnInit {
  notesOpen: boolean = true;
  newNotesOpen: boolean = false;

  newNotes() {
    this.notesOpen = false;
    this.newNotesOpen = true;
  }

  public notes: NoteModel[] = [];

  constructor(
    private notesService: NotesService,
    private socketService: SocketsService
  ) { }

  ngOnInit(): void {
    this.getAllNotes();

    this.socketService.subscribe("notes_update", (data: any) => {
      this.getAllNotes();
    });
  }

  private getAllNotes(): void {
    this.notesService.getAll().subscribe((result) => {
      this.notes = result;
    });
  }

  public deleteNote(note: NoteModel): void {
    const response = confirm("Are you sure you want to delete this note?");
    if (response) {
      this.notesService.delete(note._id).subscribe(() => {
        this.getAllNotes();
        this.socketService.publish("notes_update", {});
      });
    }
  }
}
