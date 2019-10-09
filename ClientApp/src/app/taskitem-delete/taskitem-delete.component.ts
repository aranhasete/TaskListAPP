import { Component, OnInit, Inject } from '@angular/core';
import { TaskItem } from '../task-item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskitem-delete',
  templateUrl: './taskitem-delete.component.html',
  styleUrls: ['./taskitem-delete.component.css']
})
export class TaskitemDeleteComponent implements OnInit {
  public taskItem: TaskItem;
  private myHttp: HttpClient;
  private myBaseUrl: string;
  private myActiveRouter: ActivatedRoute;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private activeRouter: ActivatedRoute) {
    this.myHttp = http;
    this.myBaseUrl = baseUrl;
    this.myActiveRouter = activeRouter;
    this.getTaskItem(this.myActiveRouter.snapshot.params['id']);
  }

  ngOnInit() {
  }

  getTaskItem(id: number) {
    this.myHttp.get<TaskItem>(this.myBaseUrl + 'api/TaskItems/' + id).subscribe(result => {
      this.taskItem = result;
    }, error => console.error(error));
  }

  deleteTaskItem(id: number){
    this.myHttp.delete<TaskItem>(this.myBaseUrl + 'api/TaskItems/' + id).subscribe(result => {
      this.taskItem = result;
    }, error => console.error(error));    
  }
}
