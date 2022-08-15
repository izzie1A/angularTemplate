import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbStorageUiComponent } from './fb-storage-ui.component';

describe('FbStorageUiComponent', () => {
  let component: FbStorageUiComponent;
  let fixture: ComponentFixture<FbStorageUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbStorageUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbStorageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
