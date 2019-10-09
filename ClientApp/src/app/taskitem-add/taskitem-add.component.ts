import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from '../task-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskitem-add',
  templateUrl: './taskitem-add.component.html',
  styleUrls: ['./taskitem-add.component.css']
})
export class TaskitemAddComponent implements OnInit {
  taskItemFormAdd: FormGroup;
  public taskItem: TaskItem;
  private myHttp: HttpClient;
  private myBaseUrl: string;
  private myRouter: Router;

  constructor(private formBuilder: FormBuilder, http: HttpClient, @Inject('BASE_URL') baseUrl: string,
              private router: Router) {
    this.myHttp = http;
    this.myBaseUrl = baseUrl;
    this.myRouter = router;
    this.createContactForm();
  }

  ngOnInit() {
  }

  createContactForm() {
    this.taskItemFormAdd = this.formBuilder.group({
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
    console.log('Your form data : ', this.taskItemFormAdd.value);
    this.addTaskItem(this.taskItemFormAdd.value.title, this.taskItemFormAdd.value.isComplete);
    this.taskItemFormAdd.reset();
    // this.goToList()
  }

  goToList() {
    // this.myRouter.navigate(['/TaskItems']);
    this.router.navigate(['/TaskItems/', '']);
  }
}
