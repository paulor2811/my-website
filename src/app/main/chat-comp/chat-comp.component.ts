import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrl: './chat-comp.component.css'
})
export class ChatCompComponent {

  newMessage: string = '';

  messages: string[] = [];

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}
