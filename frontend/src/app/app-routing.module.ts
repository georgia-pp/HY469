import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ClockComponent } from './pages/clock/clock.component';
import { NotesComponent } from './pages/notes/notes.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { DocViewerComponent } from './pages/doc-viewer/doc-viewer.component';
import { FilesComponent } from './pages/files/files.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RelaxComponent } from './pages/relax/relax.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'pages/calendar', component: CalendarComponent },
  { path: 'pages/clock', component: ClockComponent },
  { path: 'pages/notes', component: NotesComponent },
  { path: 'pages/messages', component: MessagesComponent },
  { path: 'pages/calculator', component: CalculatorComponent },
  { path: 'pages/doc-viewer', component: DocViewerComponent },
  { path: 'pages/files', component: FilesComponent },
  { path: 'pages/settings', component: SettingsComponent },
  { path: 'pages/relax', component: RelaxComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
