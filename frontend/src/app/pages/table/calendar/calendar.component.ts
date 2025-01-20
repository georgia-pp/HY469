import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/global/models/tasks/task.model';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public tasks: TaskModel[] = [];
  constructor(
    private tasksService: TasksService,
    private socketService: SocketsService
  ) { }

  days = [
    { label: 'Sun', date: 19, active: false },
    { label: 'Mon', date: 20, active: true },
    { label: 'Tue', date: 21, active: false },
    { label: 'Wed', date: 22, active: false },
    { label: 'Thu', date: 23, active: false },
    { label: 'Fri', date: 24, active: false },
    { label: 'Sat', date: 25, active: false }
  ];

  filter: 'all' | 'completed' | 'pending' = 'all';

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

  get filteredTasks(): TaskModel[] {
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filter === 'pending') {
      return this.tasks.filter(task => !task.completed);
    }
    return this.tasks;
  }

  onTaskComplete(t: TaskModel) {
    t.completed = !t.completed;
    this.tasksService.update(t).subscribe(response => {
      console.log('Task updated', response);
    });
  }
}

export interface Task {
  time: string;
  title: string;
  description: string;
  completed: boolean;
}
