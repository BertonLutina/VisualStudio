import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDectionComponentComponent } from './ng-for-dection-component.component';

describe('NgForDectionComponentComponent', () => {
  let component: NgForDectionComponentComponent;
  let fixture: ComponentFixture<NgForDectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForDectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
