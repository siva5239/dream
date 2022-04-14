import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedreamcaptureComponent } from './createdreamcapture.component';

describe('CreatedreamcaptureComponent', () => {
  let component: CreatedreamcaptureComponent;
  let fixture: ComponentFixture<CreatedreamcaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedreamcaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedreamcaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
