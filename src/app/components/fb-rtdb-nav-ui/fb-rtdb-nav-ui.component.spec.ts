import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbRtdbNavUiComponent } from './fb-rtdb-nav-ui.component';

describe('FbRtdbNavUiComponent', () => {
  let component: FbRtdbNavUiComponent;
  let fixture: ComponentFixture<FbRtdbNavUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbRtdbNavUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbRtdbNavUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
