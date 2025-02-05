import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransferenciaDialogComponent } from './add-transferencia-dialog.component';

describe('AddTransferenciaDialogComponent', () => {
  let component: AddTransferenciaDialogComponent;
  let fixture: ComponentFixture<AddTransferenciaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTransferenciaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransferenciaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
