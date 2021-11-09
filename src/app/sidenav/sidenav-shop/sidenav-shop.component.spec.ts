import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavShopComponent } from './sidenav-shop.component';

describe('SidenavShopComponent', () => {
  let component: SidenavShopComponent;
  let fixture: ComponentFixture<SidenavShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
