import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbCloudstoreUiComponent } from './fb-cloudstore-ui.component';

describe('FbCloudstoreUiComponent', () => {
  let component: FbCloudstoreUiComponent;
  let fixture: ComponentFixture<FbCloudstoreUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbCloudstoreUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbCloudstoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
