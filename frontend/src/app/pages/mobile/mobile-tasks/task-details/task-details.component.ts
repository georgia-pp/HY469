import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/global/models/tasks/task.model';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  tasksOpen: boolean = false;
  detailsOpen: boolean = true;
  newTaskOpen: boolean = false;

  newTask() {
    this.newTaskOpen = true;
    this.detailsOpen = false;
  }

  back() {
    this.tasksOpen = true;
    this.detailsOpen = false;
  }

  public tasks: TaskModel[] = [];

  constructor(
    private tasksService: TasksService,
    private socketService: SocketsService
  ) { }

  ngOnInit(): void {
    this.getAllTasks();

    this.socketService.subscribe("tasks_update", (data: any) => {
      this.getAllTasks();
    });
  }

  private getAllTasks(): void {
    this.tasksService.getAll().subscribe((result) => {
      this.tasks = result;
      this.sortTasks();
    });
  }

  private sortTasks(): void {
    this.tasks.sort((a, b) => {
      const dateA = new Date(`${a.taskDate}T${a.taskTime}`);
      const dateB = new Date(`${b.taskDate}T${b.taskTime}`);
      return dateA.getTime() - dateB.getTime();
    });
  }

  public deleteTask(task: TaskModel): void {
    const response = confirm("Are you sure you want to delete this task?");
    if (response) {
      this.tasksService.delete(task._id).subscribe(() => {
        this.getAllTasks();
        this.socketService.publish("tasks_update", {});
      });
    }
  }

  toggleCompletion(task: TaskModel): void {
    task.completed = !task.completed;
    this.tasksService.update(task).subscribe(response => {
      console.log('Task updated', response);
    });
  }

  days = [
    { label: 'Sun', date: 19, active: false },
    { label: 'Mon', date: 20, active: true },
    { label: 'Tue', date: 21, active: false },
    { label: 'Wed', date: 22, active: false },
    { label: 'Thu', date: 23, active: false },
    { label: 'Fri', date: 24, active: false },
    { label: 'Sat', date: 25, active: false }
  ];
}
