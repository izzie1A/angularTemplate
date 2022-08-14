import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSlideshowComponent } from './img-slideshow.component';

describe('ImgSlideshowComponent', () => {
  let component: ImgSlideshowComponent;
  let fixture: ComponentFixture<ImgSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgSlideshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
