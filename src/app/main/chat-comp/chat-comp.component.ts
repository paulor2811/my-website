import { Component, OnInit } from '@angular/core';
import { UserService } from '../../utils/user.service';
import { ChatService } from '../../utils/chat.service';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.css']
})
export class ChatCompComponent implements OnInit {
  newMessage: string = '';
  messages: { user: string, message: string }[] = [];
  userName: string = '';

  constructor(private userService: UserService, private chatService: ChatService) { }

  ngOnInit() {
    this.userName = this.userService.usuarioLogado.nome;

    this.chatService.ouvirMensagens().subscribe((message: any) => {
      console.log('Mensagem recebida:', message);
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.enviarMensagem({ user: this.userName, message: this.newMessage }).subscribe(
        response => {
          console.log('Mensagem enviada com sucesso:', response);
          this.newMessage = '';
        },
        error => {
          console.error('Erro ao enviar mensagem:', error);
        }
      );
    }
  }
}
