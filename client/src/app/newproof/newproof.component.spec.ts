import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproofComponent } from './newproof.component';

describe('NewproofComponent', () => {
  let component: NewproofComponent;
  let fixture: ComponentFixture<NewproofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewproofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewproofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
