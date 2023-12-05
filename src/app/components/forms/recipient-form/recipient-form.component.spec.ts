import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientFormComponent } from './recipient-form.component';

describe('RecipientFormComponent', () => {
  let component: RecipientFormComponent;
  let fixture: ComponentFixture<RecipientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
