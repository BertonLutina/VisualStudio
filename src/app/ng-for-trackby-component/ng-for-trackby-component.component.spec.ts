import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTrackbyComponentComponent } from './ng-for-trackby-component.component';

describe('NgForTrackbyComponentComponent', () => {
  let component: NgForTrackbyComponentComponent;
  let fixture: ComponentFixture<NgForTrackbyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTrackbyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTrackbyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
