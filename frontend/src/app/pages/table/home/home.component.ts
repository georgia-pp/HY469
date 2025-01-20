import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  transition: string = 'none';
  currapp = -1;
  apps: boolean[] = [false, false, false, false, false, false, false];

  isExtended: boolean[] = [false, false, false, false, false, false, false];
  extendedWindow: boolean = false;
  extended_apps: number[] = []

  koumpiamenu: boolean = true;
  showButton: boolean = false;
  menuOpen: boolean = false;
  showInside: boolean = false;

  toggleMenu(): void {
    this.transition = "all 0.6s ease";
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      setTimeout(() => {
        this.showInside = true;
      }, 400);
    }
    else {
      this.showInside = false;
    }

    setTimeout(() => {
      this.transition = 'none';
    }, 600);
  }


  openApp(id: number): void {
    this.koumpiamenu = false;
    this.apps[id] = true;
    this.currapp = id;
  }

  closeapp(): void {
    this.apps[this.currapp] = false;
    this.currapp = -1;
    this.koumpiamenu = true;
  }

  closeExtended(app: number): void {
    this.extended_apps = this.extended_apps.filter((a) => a !== app);
    this.isExtended[app] = false;
    if (this.extended_apps.length === 0) {
      this.extendedWindow = false;
    }
  }

  openExtended(): void {
    if (this.currapp === -1) return;
    this.isExtended[this.currapp] = true;
    this.extended_apps.push(this.currapp);
    this.extendedWindow = true;
    this.closeapp();
  }

  getId(app: string): number {
    if (app === "calculator") return 0;
    else if (app === "calendar") return 1;
    else if (app === "notes") return 2;
    else if (app === "messages") return 3;
    else if (app === "settings") return 4;
    else if (app === "docviewer") return 5;
    else if (app === "photos") return 6;
    else return -1;
  }
}