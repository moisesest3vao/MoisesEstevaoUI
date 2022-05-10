import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private http:HttpClient) { }

  salvaMensagem(mensagem: any){
    return this.http.post(`${environment.apiUrl}/mensagem`,mensagem);
  }

}
