import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientEditComponent } from './recipient-edit.component';

describe('RecipientEditComponent', () => {
  let component: RecipientEditComponent;
  let fixture: ComponentFixture<RecipientEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
