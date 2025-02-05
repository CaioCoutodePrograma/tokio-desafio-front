import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransferenciaModel } from '../model/transferencia.model';

@Component({
  selector: 'app-add-transferencia-dialog',
  standalone: false,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  
  templateUrl: './add-transferencia-dialog.component.html',
  styleUrl: './add-transferencia-dialog.component.css'
})
export class AddTransferenciaDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddTransferenciaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TransferenciaModel
  ) {}

  
  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void{
    this.dialogRef.close();
  }

}
