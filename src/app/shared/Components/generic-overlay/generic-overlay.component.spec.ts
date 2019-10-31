import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericOverlayComponent } from './generic-overlay.component';

describe('GenericOverlayComponent', () => {
  let component: GenericOverlayComponent;
  let fixture: ComponentFixture<GenericOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
