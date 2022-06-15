import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompModalComponent } from './new-comp-modal.component';

describe('NewCompModalComponent', () => {
  let component: NewCompModalComponent;
  let fixture: ComponentFixture<NewCompModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
