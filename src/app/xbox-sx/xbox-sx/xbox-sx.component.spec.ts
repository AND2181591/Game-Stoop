import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxSXComponent } from './xbox-sx.component';

describe('XboxSXComponent', () => {
  let component: XboxSXComponent;
  let fixture: ComponentFixture<XboxSXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxSXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxSXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
