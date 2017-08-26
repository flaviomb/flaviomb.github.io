import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeDadosComponent } from './base-de-dados.component';

describe('BaseDeDadosComponent', () => {
  let component: BaseDeDadosComponent;
  let fixture: ComponentFixture<BaseDeDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDeDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDeDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
