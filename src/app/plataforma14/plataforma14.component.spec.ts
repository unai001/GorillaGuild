import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plataforma14Component } from './plataforma14.component';

describe('Plataforma14Component', () => {
  let component: Plataforma14Component;
  let fixture: ComponentFixture<Plataforma14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plataforma14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plataforma14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
