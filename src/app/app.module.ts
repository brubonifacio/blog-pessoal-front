import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
<<<<<<< HEAD
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
=======
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
>>>>>>> component-entrar-cadasrar

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
<<<<<<< HEAD
    CadastrarComponent,
    EntrarComponent
=======
    EntrarComponent,
    CadastrarComponent
>>>>>>> component-entrar-cadasrar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
