import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestadoresComponent } from './form-prestadores.component';

describe('FormPrestadoresComponent', () => {
  let component: FormPrestadoresComponent;
  let fixture: ComponentFixture<FormPrestadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrestadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPrestadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
