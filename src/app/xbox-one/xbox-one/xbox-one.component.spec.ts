import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxOneComponent } from './xbox-one.component';

describe('XboxOneComponent', () => {
  let component: XboxOneComponent;
  let fixture: ComponentFixture<XboxOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
