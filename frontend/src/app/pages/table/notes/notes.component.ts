import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/global/models/notes/note.model';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { NotesService } from 'src/app/global/services/notes/note.service';
import { response } from 'express';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public notes: NoteModel[] = [];
  public filteredNotes: NoteModel[] = [];
  public categories = [
    { name: 'Work', color: '#f8d7da' },
    { name: 'Personal', color: '#d4edda' },
    { name: 'Project A', color: '#cce5ff' }
  ];

  public activeCategory: string | null = null;

  constructor(
    private notesService: NotesService,
    private socketService: SocketsService
  ) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  private getAllNotes(): void {
    this.notesService.getAll().subscribe((result) => {
      console.log('Fetched notes:', result);
      this.notes = result;
      this.filteredNotes = this.notes;
    });
  }

  public filterNotes(color: string): void {
    this.activeCategory = color;
    this.filteredNotes = this.notes.filter(note => note.color === color);
  }

  public resetFilter(): void {
    this.activeCategory = null;
    this.filteredNotes = this.notes;
  }

  filter: 'all' | 'work' | 'personal' | 'project' = 'all';

  get categoryNotes(): NoteModel[] {
    if (this.filter === 'work') {
      return this.notes.filter(note => note.category === 'Work');
    } else if (this.filter === 'personal') {
      return this.notes.filter(note => note.category === 'Personal');
    } else if (this.filter === 'project') {
      return this.notes.filter(note => note.category === 'Project A');
    }
    return this.notes;
  }

  toggleExtend(n: Note): void {
    n.extended = !n.extended;
  }

  togglePin(n: NoteModel): void {
    n.pin = !n.pin;
    this.notesService.update(n).subscribe(response => {
      console.log('Note update', response);
    });
  }
}

export interface Note {
  extended: boolean;
  pinned: boolean;
  title: string;
  description: string;
  color: string;
}