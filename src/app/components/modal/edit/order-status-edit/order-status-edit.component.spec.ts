import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusEditComponent } from './order-status-edit.component';

describe('OrderStatusEditComponent', () => {
  let component: OrderStatusEditComponent;
  let fixture: ComponentFixture<OrderStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStatusEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
