import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { MusicWidgetComponent } from './music-widget/music-widget.component';
import { NoteModel } from 'src/app/global/models/notes/note.model';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { NotesService } from 'src/app/global/services/notes/note.service';
import { response } from 'express';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  public notes: NoteModel[] = [];
  public filteredNotes: NoteModel[] = [];

  photosEnabled: boolean = false;
  notesEnabled: boolean = true;
  notessum: number = 6;
  noteCategory: string = "all";
  musicPlaying: boolean = false;
  recognition: any;
  listening: boolean = false;
  command: string = '';
  @ViewChild(MusicWidgetComponent) musicWidget!: MusicWidgetComponent;

  constructor(private zone: NgZone,
    private notesService: NotesService,
    private socketService: SocketsService
  ) {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        this.zone.run(() => {
          this.command = transcript;
          this.executeCommand(transcript);
        });
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
      };

      this.recognition.onend = () => {
        this.zone.run(() => {
          this.listening = false;
        });
      };
    } else {
      console.error('SpeechRecognition is not supported in this browser.');
    }
  }

  public categories = [
    { name: 'Work', color: '#f8d7da' },
    { name: 'Personal', color: '#d4edda' },
    { name: 'Project A', color: '#cce5ff' }
  ];
  public activeCategory: string | null = null;

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

  togglePhotos(): void {
    this.photosEnabled = !this.photosEnabled;
  }

  toggleNotes(): void {
    this.notesEnabled = !this.notesEnabled;
  }

  startListening() {
    if (this.recognition) {
      this.listening = true;
      this.command = '';
      this.recognition.start();
    }
  }

  executeCommand(command: string) {
    if (command === 'play music') {
      if (!this.musicPlaying) {
        this.musicPlaying = true;
        this.notifyMusicWidget();
      }
    }
    if (command === 'stop music') {
      if (this.musicPlaying) {
        this.musicPlaying = false;
        this.notifyMusicWidget();
      }
    }
    else if (command === 'work notes') {
      this.notesCategoryFilter("work");
    }
    else if (command === 'personal notes') {
      this.notesCategoryFilter("personal");
    }
    else if (command === 'urgent notes') {
      this.notesCategoryFilter("urgent");
    }
    else if (command === 'reminder notes') {
      this.notesCategoryFilter("reminder");
    }
    else if (command === 'all notes') {
      this.notesCategoryFilter("all");
    }
    else if (command === 'show photos') {
      this.togglePhotos();
    }
    else if (command === 'hide photos') {
      this.togglePhotos();
    }
    else {
      console.log(`Unrecognized command: "${command}"`);
    }
  }

  notifyMusicWidget() {
    if (this.musicWidget) {
      this.musicWidget.togglePlay();
    }
  }

  getNotes() {
    return this.notes.filter(note => note.pin === true);
  }

  notesCategoryFilter(c: string) {
    if (c === "work") this.noteCategory = "work";
    else if (c === "urgent") this.noteCategory = "urgent";
    else if (c === "personal") this.noteCategory = "personal";
    else if (c === "reminder") this.noteCategory = "reminder";
    else if (c === "all") this.noteCategory = "all";
    else {
      console.log("Category error");
    }
  }
}
