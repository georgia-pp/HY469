import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/table/home/home.component';
import { PhoneComponent } from './pages/mobile/phone/phone.component';
import { CalendarComponent } from './pages/table/calendar/calendar.component';
import { ClockComponent } from './pages/table/clock/clock.component';
import { NotesComponent } from './pages/table/notes/notes.component';
import { MessagesComponent } from './pages/table/messages/messages.component';
import { CalculatorComponent } from './pages/table/calculator/calculator.component';
import { DocViewerComponent } from './pages/table/doc-viewer/doc-viewer.component';
import { FilesComponent } from './pages/table/files/files.component';
import { SettingsComponent } from './pages/table/settings/settings.component';
import { RelaxComponent } from './pages/table/relax/relax.component';
import { WallComponent } from './pages/wall/wall/wall.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/table/home/home.module').then(m => m.HomeModule) },
  { path: 'mobile', component: PhoneComponent },
  { path: 'wall', component: WallComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
