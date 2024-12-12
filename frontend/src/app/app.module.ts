import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { PhoneComponent } from './pages/phone/phone.component';
//import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ClockComponent } from './pages/clock/clock.component';
import { NotesComponent } from './pages/notes/notes.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { FilesComponent } from './pages/files/files.component';
import { DocViewerComponent } from './pages/doc-viewer/doc-viewer.component';
import { RelaxComponent } from './pages/relax/relax.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { FormsModule } from '@angular/forms';


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
    RelaxComponent,
    SettingsComponent,
    MessagesComponent
  ],
  imports: [
    SocketIoModule.forRoot(socketIoConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    //MatTabsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
