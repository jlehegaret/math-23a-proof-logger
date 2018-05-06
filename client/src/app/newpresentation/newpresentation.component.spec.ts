import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpresentationComponent } from './newpresentation.component';

describe('NewpresentationComponent', () => {
  let component: NewpresentationComponent;
  let fixture: ComponentFixture<NewpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
