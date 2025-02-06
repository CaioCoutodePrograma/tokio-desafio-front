 export class FaixaTaxaModel{
    id:number;
    faixa:string;
    reais:number;
    taxa:number;
    diaDe:number;
    diaAte:number;
  
    constructor(
        id : number,
        faixa:string,
        reais:number,
        taxa:number,
        diaDe:number,
        diaAte:number,
    ){
        this.id = id;
        this.faixa=faixa;
        this.reais=reais;
        this.taxa=taxa;
        this.diaDe=diaDe;
        this.diaAte=diaAte;
    }
 }
