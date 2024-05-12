import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCompComponent } from './main/main-comp/main-comp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterCompComponent } from './main/register-comp/register-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatCompComponent } from './main/chat-comp/chat-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    RegisterCompComponent,
    ChatCompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }