import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  enviarMensagem(message: { user: string, message: string }): Observable<any> {
    return this.http.post<any>('https://mycrudservernode-production.up.railway.app/api/mensagens', message);
  }
}