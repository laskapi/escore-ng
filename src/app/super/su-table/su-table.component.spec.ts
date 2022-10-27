import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuTableComponent } from './su-table.component';

describe('SuTableComponent', () => {
  let component: SuTableComponent;
  let fixture: ComponentFixture<SuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
