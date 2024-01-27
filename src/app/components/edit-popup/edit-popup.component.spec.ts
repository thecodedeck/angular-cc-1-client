import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopupComponent } from './edit-popup.component';

describe('EditPopupComponent', () => {
  let component: EditPopupComponent;
  let fixture: ComponentFixture<EditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
