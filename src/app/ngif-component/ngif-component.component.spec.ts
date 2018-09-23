import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifComponentComponent } from './ngif-component.component';

describe('NgifComponentComponent', () => {
  let component: NgifComponentComponent;
  let fixture: ComponentFixture<NgifComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
