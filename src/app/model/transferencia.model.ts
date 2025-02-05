export class TransferenciaModel {
    id: number;
    dataTransferencia: Date;
    dataAgendamento: Date;
    faixaTaxa: string;
    valor: number;
    contaOrigem: string;
    contaDestino: string;
    valorDaTaxa : number;
  
    constructor(
      id: number,
      dataTransferencia: Date,
      dataAgendamento: Date,
      faixaTaxa: string,
      valor: number,
      contaOrigem: string,
      contaDestino: string,
      valorDaTaxa : number
    ) {
      this.id = id;
      this.dataTransferencia = dataTransferencia;
      this.dataAgendamento = dataAgendamento;
      this.faixaTaxa = faixaTaxa;
      this.valor = valor;
      this.contaOrigem = contaOrigem;
      this.contaDestino = contaDestino;
      this.valorDaTaxa = valorDaTaxa;
    }
}