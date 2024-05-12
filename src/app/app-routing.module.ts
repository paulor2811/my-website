import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCompComponent } from './main/register-comp/register-comp.component';
import { MainCompComponent } from './main/main-comp/main-comp.component';

const routes: Routes = [
  { path: 'home', component: MainCompComponent },
  { path: 'formulario', component: RegisterCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
