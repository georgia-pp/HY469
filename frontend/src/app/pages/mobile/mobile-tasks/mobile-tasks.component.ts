import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-tasks',
  templateUrl: './mobile-tasks.component.html',
  styleUrls: ['./mobile-tasks.component.scss']
})
export class MobileTasksComponent {
  tasksOpen: boolean = true;
  detailsOpen: boolean = false;

  toggleTask(){
    this.tasksOpen = false;
    this.detailsOpen = true;
  }
}
