import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteModel } from '../../models/notes/note.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
  }

  public getAll(): Observable<NoteModel[]> {
    return this.http
      .get<NoteModel[]>(`${this.hostURl}/api/notes`)
      .pipe(map(result => _.map(result, (t) => new NoteModel(t))));
  }

  public getById(id: string): Observable<NoteModel> {
    return this.http
      .get<NoteModel>(`${this.hostURl}/api/notes/${id}`)
      .pipe(map(result => new NoteModel(result)));
  }

  public create(resource: NoteModel): Observable<NoteModel> {
    return this.http
      .post<NoteModel>(`${this.hostURl}/api/notes`, resource)
      .pipe(map(result => new NoteModel(result)));
  }

  public update(resource: NoteModel): Observable<NoteModel> {
    return this.http
      .put<NoteModel>(`${this.hostURl}/api/notes/${resource._id}`, resource)
      .pipe(map(result => new NoteModel(result)));
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/notes/${id}`);
  }

}
