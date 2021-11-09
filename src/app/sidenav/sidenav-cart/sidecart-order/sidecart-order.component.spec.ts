import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecartOrderComponent } from './sidecart-order.component';

describe('SidecartOrderComponent', () => {
  let component: SidecartOrderComponent;
  let fixture: ComponentFixture<SidecartOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecartOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecartOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
