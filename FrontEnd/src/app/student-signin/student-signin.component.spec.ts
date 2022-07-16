import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSigninComponent } from './student-signin.component';

describe('StudentSigninComponent', () => {
  let component: StudentSigninComponent;
  let fixture: ComponentFixture<StudentSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
