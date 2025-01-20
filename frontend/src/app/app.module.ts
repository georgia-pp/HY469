import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/table/home/home.component';
import { PhoneComponent } from './pages/mobile/phone/phone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './pages/table/calendar/calendar.component';
import { ClockComponent } from './pages/table/clock/clock.component';
import { NotesComponent } from './pages/table/notes/notes.component';
import { CalculatorComponent } from './pages/table/calculator/calculator.component';
import { FilesComponent } from './pages/table/files/files.component';
import { DocViewerComponent } from './pages/table/doc-viewer/doc-viewer.component';
import { SettingsComponent } from './pages/table/settings/settings.component';
import { MessagesComponent } from './pages/table/messages/messages.component';
import { FormsModule } from '@angular/forms';
import { WallComponent } from './pages/wall/wall.component';
import { MobileClockComponent } from './pages/mobile/mobile-clock/mobile-clock.component';
import { MobileTasksComponent } from './pages/mobile/mobile-tasks/mobile-tasks.component';
import { MobileMessagesComponent } from './pages/mobile/mobile-messages/mobile-messages.component';
import { MobileNotesComponent } from './pages/mobile/mobile-notes/mobile-notes.component';
import { MobileHomeComponent } from './pages/mobile/mobile-home/mobile-home.component';
import { ConversationComponent } from './pages/mobile/mobile-messages/conversation/conversation.component';
import { TaskDetailsComponent } from './pages/mobile/mobile-tasks/task-details/task-details.component';
import { NewTaskComponent } from './pages/mobile/mobile-tasks/new-task/new-task.component';
import { NewNoteComponent } from './pages/mobile/mobile-notes/new-note/new-note.component';

import { MatIconModule } from '@angular/material/icon';
import { ClockWidgetComponent } from './pages/wall/clock-widget/clock-widget/clock-widget.component';
import { MusicWidgetComponent } from './pages/wall/music-widget/music-widget.component';
import { NotificationWidgetComponent } from './pages/wall/notification-widget/notification-widget/notification-widget.component';
import { CalendarWidgetComponent } from './pages/wall/calendar-widget/calendar-widget/calendar-widget.component';
import { PhotosComponent } from './pages/table/photos/photos.component';

const socketIoConfig: SocketIoConfig = { url: environment.host, options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhoneComponent,
    CalendarComponent,
    ClockComponent,
    NotesComponent,
    CalculatorComponent,
    FilesComponent,
    DocViewerComponent,
    SettingsComponent,
    MessagesComponent,
    WallComponent,
    MobileClockComponent,
    MobileTasksComponent,
    MobileMessagesComponent,
    MobileNotesComponent,
    MobileHomeComponent,
    ConversationComponent,
    TaskDetailsComponent,
    NewTaskComponent,
    NewNoteComponent,
    ClockWidgetComponent,
    MusicWidgetComponent,
    NotificationWidgetComponent,
    CalendarWidgetComponent,
    PhotosComponent
  ],
  imports: [
    SocketIoModule.forRoot(socketIoConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    //MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
