import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferenciaModel } from '../model/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/desafiotokio'; 

  constructor(private http: HttpClient) { }

   listarTransferencias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transferencia`);
  }

  salvarTransferencia(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transferencia`, data );
  }

  calcularTaxa(data:string): Observable<any> {
    
    let params = new HttpParams().set("data",data)
    return this.http.get(`${this.baseUrl}/transferencia/calcular-taxa`,{ params: params });
  }
}
