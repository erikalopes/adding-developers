import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperEditComponent } from './developer-edit.component';

describe('EmployeeEditComponent', () => {
  let component: DeveloperEditComponent;
  let fixture: ComponentFixture<DeveloperEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
