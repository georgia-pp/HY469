import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  settingsOpen: boolean = true;
  showSettings: boolean = true;

  toggleSettings() {
    this.showSettings = !this.showSettings;
    this.settingsOpen = !this.settingsOpen;
  }
}
