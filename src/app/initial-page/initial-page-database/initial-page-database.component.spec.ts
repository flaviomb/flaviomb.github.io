import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPageDatabaseComponent } from './initial-page-database.component';

describe('InitialPageDatabaseComponent', () => {
  let component: InitialPageDatabaseComponent;
  let fixture: ComponentFixture<InitialPageDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPageDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPageDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
