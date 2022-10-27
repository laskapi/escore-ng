import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuUserComponent } from './su-user.component';

describe('SuUserComponent', () => {
  let component: SuUserComponent;
  let fixture: ComponentFixture<SuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
