import { Component } from '@angular/core';
import { TaskModel } from 'src/app/global/models/tasks/task.model';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  detailsOpen: boolean = false;
  newTaskOpen: boolean = true;

  back() {
    this.detailsOpen = true;
    this.newTaskOpen = false;
  }

  public category: string = '';
  public title: string = '';
  public context: string = '';
  public taskDate: string = '';
  public taskTime: string = '';
  public completed: boolean = false;

  constructor(
    private tasksService: TasksService,
    private socketService: SocketsService
  ) { }

  public setCategory(category: string): void {
    this.category = category;
  }

  public postTask(): void {
    const task = new TaskModel();
    task.category = this.category;
    task.title = this.title;
    task.context = this.context;
    task.taskDate = this.taskDate;
    task.taskTime = this.taskTime;
    task.completed = this.completed;

    this.tasksService.create(task).subscribe((result) => {
      this.category = '';
      this.title = '';
      this.context = '';
      this.taskDate = '';
      this.taskTime = '';
      this.completed = false;
      this.socketService.publish("tasks_update", task);
    });
  }
}
