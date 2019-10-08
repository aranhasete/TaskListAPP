import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-taskitem-list',
  templateUrl: './taskitem-list.component.html',
  styleUrls: ['./taskitem-list.component.css']
})
export class TaskitemListComponent implements OnInit {
  public taskItems: TaskItem[];
  private myHttp: HttpClient;
  private myBaseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myHttp = http;
    this.myBaseUrl = baseUrl;
    this.getTaskItems();
  }

  ngOnInit() {
  }

  getTaskItems() {
    this.myHttp.get<TaskItem[]>(this.myBaseUrl + 'api/TaskItems').subscribe(result => {
      this.taskItems = result;
    }, error => console.error(error));
  }

}

// interface TaskItem {
//   id: number;
//   title: number;
//   isComplete: boolean;
// }
