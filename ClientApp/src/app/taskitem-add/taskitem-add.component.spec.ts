import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskitemAddComponent } from './taskitem-add.component';

describe('TaskitemAddComponent', () => {
  let component: TaskitemAddComponent;
  let fixture: ComponentFixture<TaskitemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskitemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskitemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
