import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskitemListComponent } from './taskitem-list.component';

describe('TaskitemListComponent', () => {
  let component: TaskitemListComponent;
  let fixture: ComponentFixture<TaskitemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskitemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
