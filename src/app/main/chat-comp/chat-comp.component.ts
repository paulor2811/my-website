import { Component } from '@angular/core';
import { ChatService } from '../../utils/chat.service';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.css']
})
export class ChatCompComponent {
  newMessage: string = '';
  messages: { user: string, message: string }[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Envia a nova mensagem para o servidor
      this.chatService.enviarMensagem({ user: 'Nome do usuário', message: this.newMessage }).subscribe(
        response => {
          console.log('Mensagem enviada com sucesso:', response);
          // Adiciona a mensagem à lista localmente
          this.messages.push({ user: 'Nome do usuário', message: this.newMessage });
          this.newMessage = ''; // Limpa o campo de entrada
        },
        error => {
          console.error('Erro ao enviar mensagem:', error);
          // Trate o erro, se necessário
        }
      );
    }
  }
}
