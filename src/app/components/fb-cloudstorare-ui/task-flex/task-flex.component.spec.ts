import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFlexComponent } from './task-flex.component';

describe('TaskFlexComponent', () => {
  let component: TaskFlexComponent;
  let fixture: ComponentFixture<TaskFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
