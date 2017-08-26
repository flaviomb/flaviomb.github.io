import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicosComponent } from './periodicos.component';

describe('PeriodicosComponent', () => {
  let component: PeriodicosComponent;
  let fixture: ComponentFixture<PeriodicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
