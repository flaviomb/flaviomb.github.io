import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPagePeriodicosComponent } from './initial-page-periodicos.component';

describe('InitialPagePeriodicosComponent', () => {
  let component: InitialPagePeriodicosComponent;
  let fixture: ComponentFixture<InitialPagePeriodicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPagePeriodicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPagePeriodicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
