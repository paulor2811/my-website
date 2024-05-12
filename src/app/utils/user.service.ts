import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  usuarioLogado: any; // Armazena os detalhes do usuário após o login

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>('https://mycrudservernode-production.up.railway.app/api/usuarios', usuario);
  }

  fazerLogin(email: string, senha: string): Observable<any> {
    return this.http.post<any>('https://mycrudservernode-production.up.railway.app/api/login', { email, senha }).pipe(
      catchError(error => {
        return throwError(error); // Tratar o erro no componente que chama este método
      }),
      tap(response => {
        // Armazena os detalhes do usuário após o login bem-sucedido
        this.usuarioLogado = response.usuario;
      })
    );
  }
}
