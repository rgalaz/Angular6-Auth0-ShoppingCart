import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { PedidoFinalizadoComponent } from './pedido-finalizado/pedido-finalizado.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'realizar-pedido', component: RealizarPedidoComponent },
    { path: 'pedido-finalizado', component: PedidoFinalizadoComponent },
    { path: 'callback', component: CallbackComponent },
    { path: '**', redirectTo: '' }
  ];
