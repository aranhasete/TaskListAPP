import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-taskitem-add',
  templateUrl: './taskitem-add.component.html',
  styleUrls: ['./taskitem-add.component.css']
})
export class TaskitemAddComponent implements OnInit {
  taskItemForm: FormGroup;
  public taskItem: TaskItem;
  private myHttp: HttpClient;
  private myBaseUrl: string;

  constructor(private formBuilder: FormBuilder, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myHttp = http;
    this.myBaseUrl = baseUrl;
    this.createContactForm();
  }

  ngOnInit() {
  }

  createContactForm() {
    this.taskItemForm = this.formBuilder.group({
      title: [''],
      isComplete: [false]
    });
  }

  addTaskItem(Title, IsComplete) {
    const obj = {
      Title,
      IsComplete
    };
    console.log(obj);
    this.myHttp.post<TaskItem>(this.myBaseUrl + 'api/TaskItems', obj)
      .subscribe(result => {
        this.taskItem = result;
      }, error => console.error(error));
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', this.taskItemForm.value);
    this.addTaskItem(this.taskItemForm.value.title, this.taskItemForm.value.isComplete);
  }
}

// interface TaskItem {
//   title: number;
//   isComplete: boolean;
// }

