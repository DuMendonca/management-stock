import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderFormComponent } from './sender-form.component';

describe('SenderFormComponent', () => {
  let component: SenderFormComponent;
  let fixture: ComponentFixture<SenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
