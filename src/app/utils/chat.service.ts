import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;

  constructor(private http: HttpClient) {
    // Conecta ao servidor WebSocket
    this.socket = io('wss://mycrudservernode-production.up.railway.app/api/mensagens');
  }

  enviarMensagem(message: { user: string, message: string }): Observable<any> {
    return this.http.post<any>('https://mycrudservernode-production.up.railway.app/api/mensagens', message);
  }

  // Método para escutar mensagens do WebSocket
  ouvirMensagens() {
    return new Observable(observer => {
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
    });
  }
}
