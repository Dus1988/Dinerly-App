import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerEditorOverlayComponent } from './dinner-editor-overlay.component';

describe('DinnerEditorOverlayComponent', () => {
  let component: DinnerEditorOverlayComponent;
  let fixture: ComponentFixture<DinnerEditorOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerEditorOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerEditorOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
