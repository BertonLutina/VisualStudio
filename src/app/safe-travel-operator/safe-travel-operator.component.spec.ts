import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTravelOperatorComponent } from './safe-travel-operator.component';

describe('SafeTravelOperatorComponent', () => {
  let component: SafeTravelOperatorComponent;
  let fixture: ComponentFixture<SafeTravelOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTravelOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTravelOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
