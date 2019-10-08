import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskItem } from '../task-item';
import { ActivatedRoute, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-taskitem-edit',
  templateUrl: './taskitem-edit.component.html',
  styleUrls: ['./taskitem-edit.component.css']
})
export class TaskitemEditComponent implements OnInit {
  taskItemFormEdit: FormGroup;
  public taskItem: TaskItem;
  private myHttp: HttpClient;
  private myBaseUrl: string;
  private myActiveRouter: ActivatedRoute;
  private _id: number;

  constructor(private formBuilder: FormBuilder, http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private activeRouter: ActivatedRoute) {
    this.myHttp = http;
    this.myBaseUrl = baseUrl;
    this.myActiveRouter = activeRouter;
    this.createContactForm();
  }

  ngOnInit() {
    this.getTaskItem(this.myActiveRouter.snapshot.params['id']);
  }

  createContactForm() {
    this.taskItemFormEdit = this.formBuilder.group({
      id: [0],
      title: [''],
      isComplete: [false]
    });
  }

  getTaskItem(id: number) {
    this.myHttp.get<TaskItem>(this.myBaseUrl + 'api/TaskItems/' + id).subscribe(result => {
      this._id = result.id;
      this.taskItemFormEdit.setValue({
        id: result.id,
        title: result.title,
        isComplete: result.isComplete
      });
    }, error => console.error(error));
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', this.taskItemFormEdit.value);
    this.updateTaskItem(
      this.taskItemFormEdit.value.id,
      this.taskItemFormEdit.value.title,
      this.taskItemFormEdit.value.isComplete
    );
  }

  updateTaskItem(Id, Title, IsComplete) {
    console.log('Entou aqui');
    const obj = {
      Id,
      Title,
      IsComplete
    };

    console.log(obj);
    this.myHttp.put<TaskItem>(this.myBaseUrl + 'api/TaskItems/' + this._id, obj, httpOptions)
      .subscribe(result => {
        this.taskItem = result;
      }, error => console.error(error));
  }
}
