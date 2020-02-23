import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { PedidoFinalizadoComponent } from './pedido-finalizado/pedido-finalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    RealizarPedidoComponent,
    PedidoFinalizadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
