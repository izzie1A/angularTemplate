import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRtdbComponentComponent } from './ng-rtdb-component.component';

describe('NgRtdbComponentComponent', () => {
  let component: NgRtdbComponentComponent;
  let fixture: ComponentFixture<NgRtdbComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRtdbComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRtdbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
