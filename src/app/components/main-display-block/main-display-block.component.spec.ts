import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayBlockComponent } from './main-display-block.component';

describe('MainDisplayBlockComponent', () => {
  let component: MainDisplayBlockComponent;
  let fixture: ComponentFixture<MainDisplayBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDisplayBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDisplayBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
