import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartNavBarComponent } from './shopping-cart-nav-bar.component';

describe('ShoppingCartNavBarComponent', () => {
  let component: ShoppingCartNavBarComponent;
  let fixture: ComponentFixture<ShoppingCartNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
