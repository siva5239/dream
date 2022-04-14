import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdreamcaptureComponent } from './orderdreamcapture.component';

describe('OrderdreamcaptureComponent', () => {
  let component: OrderdreamcaptureComponent;
  let fixture: ComponentFixture<OrderdreamcaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdreamcaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdreamcaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
