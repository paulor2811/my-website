import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrl: './main-comp.component.css'
})
export class MainCompComponent {

  constructor(private router: Router) {}

  ShowContent: boolean = true;

  irParaFormulario() {
    this.ShowContent = false;
    this.router.navigate(['/formulario']);
  }
} 