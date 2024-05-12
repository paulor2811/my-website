import { Component } from '@angular/core';
import { UserService } from '../../utils/user.service';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.css']
})
export class ChatCompComponent {
  newMessage: string = '';
  messages: { user: string, message: string }[] = [];

  constructor(private userService: UserService) {}

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Adiciona a mensagem com o nome do usuário
      this.messages.push({ user: this.userService.usuarioLogado.nome, message: this.newMessage });
      this.newMessage = '';
    }
  }
}