import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../utils/user.service'

@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrl: './register-comp.component.css'
})
export class RegisterCompComponent {
  
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
      // Redirecionar para a página inicial ou outra página desejada
    },
    (error: HttpErrorResponse) => {
        console.error('Erro ao registrar usuário:', error);
    });
  }
}