import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisDisplayComponent } from './devis-display.component';

describe('DevisDisplayComponent', () => {
  let component: DevisDisplayComponent;
  let fixture: ComponentFixture<DevisDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
