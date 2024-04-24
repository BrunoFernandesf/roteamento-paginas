import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Importe o módulo de roteamento

import { AppComponent } from './app.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Adicione o módulo de roteamento aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
