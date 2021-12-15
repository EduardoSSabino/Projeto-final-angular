import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // modulos
import { FormsModule } from '@angular/forms'; // formulario
import { HttpClientModule } from '@angular/common/http'; // minhas requisições HTTP

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor';
import { TarefasModule } from './tarefas';
import { JogoDaVelhaModule } from './jogo-da-velha';

@NgModule({
  declarations: [ // onde se declara a maioria dos componentes
    AppComponent // meu componente
  ],
  imports: [ //importações de todos os modulos
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule
  ],
  providers: [], // onde se declara a maioria dos services
  bootstrap: [AppComponent] // componente boostrap
})
export class AppModule { } // minha classe
