
import { Component, OnInit } from '@angular/core';
import { TransferenciaModel } from './model/transferencia.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTransferenciaDialogComponent } from './add-transferencia-dialog/add-transferencia-dialog.component';
import { ApiService } from './service/api.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'front-tokio-desafio';
  displayedColumns: string[] = ['contaOrigem', 'contaDestino','valor','dataAgendamento','dataTransferencia','valorDataxa',];
  listaTransferencias: any[] = [];

  constructor(
    public dialog: MatDialog,
    private service: ApiService
  ) {}
  ngOnInit(): void {
    this.popularTabela();
  }

  popularTabela(){
    this.service.listarTransferencias().subscribe((dado)=>{
      if(dado){
        
        this.listaTransferencias = dado;
        this.listaTransferencias.forEach((element)=>{
          element.valorDaTaxa = element.faixaTaxa.reais + (element.valor * element.faixaTaxa.taxa);
        })
      }
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddTransferenciaDialogComponent, {
      width: '200px',
      
      data: TransferenciaModel
    });

    dialogRef.afterClosed().subscribe(result => {
      
        this.popularTabela();
      
    });  
  }
}
