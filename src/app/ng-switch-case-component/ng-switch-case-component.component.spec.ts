import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCaseComponentComponent } from './ng-switch-case-component.component';

describe('NgSwitchCaseComponentComponent', () => {
  let component: NgSwitchCaseComponentComponent;
  let fixture: ComponentFixture<NgSwitchCaseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchCaseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchCaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
