import { CommonModule, DecimalPipe, formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransferenciaModel } from '../model/transferencia.model';
import { DateFormat } from '../util/date-format';
import { ApiService } from '../service/api.service';
import { FaixaTaxaModel } from '../model/faixataxa.model';

@Component({
  selector: 'app-add-transferencia-dialog',
  standalone: false,
  templateUrl: './add-transferencia-dialog.component.html',
  styleUrl: './add-transferencia-dialog.component.css'
})
export class AddTransferenciaDialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<AddTransferenciaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public transferencia: TransferenciaModel,
    private service: ApiService
  ) {
    this.transferencia.dataAgendamento = new DateFormat().formatarData(new Date());
  }
  ngOnInit(): void {
    
    
  } 
 
  onCancel(): void {
    this.limparDados();
    this.dialogRef.close();
  }

  onSave(): void{
    this.transferencia.dataTransferencia = new DateFormat().formatarDataString(this.transferencia.dataTransferencia);
    this.service.salvarTransferencia({...this.transferencia}).subscribe((dado)=>{
      if(dado){
        this.limparDados();
        this.dialogRef.close();
      }
    })
    
    
  }

  blur(){
    if(this.transferencia.dataTransferencia != null && this.transferencia.dataTransferencia != '' && this.transferencia.valor != null && this.transferencia.valor != 0){
      this.service.calcularTaxa( new DateFormat().formatarDataString(this.transferencia.dataTransferencia)).subscribe((dado)=>{
        if(dado){
          this.transferencia.faixaTaxa  = dado;
          this.transferencia.valorDaTaxa = dado.reais + (this.transferencia.valor * dado.taxa);
          
        }
      })
    }
  }

  limparDados(){
    this.transferencia.contaDestino = '';
    this.transferencia.contaOrigem = '';
    this.transferencia.dataAgendamento ='';
    this.transferencia.dataTransferencia = '';
    this.transferencia.faixaTaxa.id = 0;
    this.transferencia.valor=0;
    this.transferencia.valorDaTaxa=0;
  }

}
