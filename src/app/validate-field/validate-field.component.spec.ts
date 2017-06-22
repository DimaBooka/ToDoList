import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateFieldComponent } from './validate-field.component';

describe('ValidateFieldComponent', () => {
  let component: ValidateFieldComponent;
  let fixture: ComponentFixture<ValidateFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
