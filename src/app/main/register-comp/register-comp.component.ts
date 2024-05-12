import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../utils/user.service';

@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrls: ['./register-comp.component.css']
})
export class RegisterCompComponent {
  registroBemSucedido: boolean = false;
  registroFalhou: boolean = false; // Variável para controlar a exibição da mensagem de erro

  constructor(private router: Router, private userService: UserService) {}
  
  irParaHome() {
    this.router.navigate(['/home']);
  }
  
  registrarUsuario() {
    const nome = (document.getElementById('InputName1') as HTMLInputElement).value;
    const email = (document.getElementById('InputEmail1') as HTMLInputElement).value;
    const senha = (document.getElementById('InputPassword1') as HTMLInputElement).value;

    const usuario = { nome, email, senha };

    this.userService.registrarUsuario(usuario)
      .subscribe(
        (response: any) => {
          console.log('Usuário registrado com sucesso!', response);
          this.registroBemSucedido = true; // Define a variável para true após o registro bem-sucedido
          this.registroFalhou = false; // Reseta a variável de erro
        },
        (error: HttpErrorResponse) => {
          console.error('Erro ao registrar usuário:', error);
          this.registroFalhou = true; // Define a variável de erro para true
          this.registroBemSucedido = false; // Reseta a variável de sucesso
        }
      );
  }
}
