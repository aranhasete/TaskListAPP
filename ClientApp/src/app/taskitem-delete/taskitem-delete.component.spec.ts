import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskitemDeleteComponent } from './taskitem-delete.component';

describe('TaskitemDeleteComponent', () => {
  let component: TaskitemDeleteComponent;
  let fixture: ComponentFixture<TaskitemDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskitemDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskitemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
