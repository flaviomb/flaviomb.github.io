import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosGraduacaoComponent } from './pos-graduacao.component';

describe('PosGraduacaoComponent', () => {
  let component: PosGraduacaoComponent;
  let fixture: ComponentFixture<PosGraduacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosGraduacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosGraduacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
