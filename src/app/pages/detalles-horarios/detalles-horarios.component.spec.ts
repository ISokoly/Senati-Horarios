import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHorariosComponent } from './detalles-horarios.component';

describe('DetallesHorariosComponent', () => {
  let component: DetallesHorariosComponent;
  let fixture: ComponentFixture<DetallesHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesHorariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
