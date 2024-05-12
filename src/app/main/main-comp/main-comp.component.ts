import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../utils/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent {
  constructor(private router: Router, private userService: UserService) {}

  ShowContent: boolean = true;
  email: string = '';
  senha: string = '';
  errorMessage: string = '';
  usuarioLogado: any = null; // Armazena os detalhes do usuário após o login

  irParaFormulario() {
    this.ShowContent = false;
    this.router.navigate(['/formulario']);
  }

  irParaLogin() {
    // Envia os dados de login para o servidor
    this.userService.fazerLogin(this.email, this.senha).subscribe(
      (response: any) => {
        // Login bem-sucedido
        console.log('Login bem-sucedido:', response);
        this.usuarioLogado = response.usuario; // Armazena os detalhes do usuário
        // Redireciona para a página de chat ou outra página desejada
        this.router.navigate(['/chat']);
      },
      (error: HttpErrorResponse) => {
        // Erro no login
        console.error('Erro no login:', error);
        this.errorMessage = 'Email ou senha incorretos'; // Exibe mensagem de erro no template
      }
    );
  }
}
