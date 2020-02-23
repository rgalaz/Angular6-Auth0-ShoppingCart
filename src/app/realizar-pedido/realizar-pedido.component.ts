import { Component, OnInit } from '@angular/core';
import { Pedido } from '../clases/pedido';
import productos from '../../assets/productos.json';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit {

  objeto = productos
  pedidos: Pedido[] = [];
  total = 0;
  cont = 0;

  constructor() {
    
  }

  ngOnInit() {
    this.totalPedido();
  }

  agregarHamburguesa() {
    let pro = productos.producto1.nombre
    let pre = productos.producto1.valor
    const hamburgesa = new Pedido(pro,pre);
    this.pedidos.push(hamburgesa);
    this.totalPedido();
    this.cont = this.cont + 1;

  }

  eliminarHamburguesa() {
    let pro = productos.producto1.nombre
    for (let i = 0; i < this.pedidos.length; i++) {
      if (this.pedidos[i].nombre === pro) {
        this.pedidos.splice(i, 1);
        this.totalPedido();
        this.cont = this.cont - 1;
        break;
      }
    }
  }

  agregarEmpanada() {
    let pro = productos.producto2.nombre
    let pre = productos.producto2.valor
    const empanada = new Pedido(pro,pre);
    this.pedidos.push(empanada);
    this.totalPedido();
    this.cont = this.cont + 1;
  }

  eliminarEmpanada() {
    let pro = productos.producto2.nombre
    for (let i = 0; i < this.pedidos.length; i++) {
      if (this.pedidos[i].nombre === pro) {
        this.pedidos.splice(i, 1);
        this.totalPedido();
        this.cont = this.cont - 1;
        break;
      }
    }
  }

  agregarHumita() {
    let pro = productos.producto3.nombre
    let pre = productos.producto3.valor
    const humita = new Pedido(pro,pre);
    this.pedidos.push(humita);
    this.totalPedido();
    this.cont = this.cont + 1;
  }

  eliminarHumita() {
    let pro = productos.producto3.nombre
    for (let i = 0; i < this.pedidos.length; i++) {
      if (this.pedidos[i].nombre === pro) {
        this.pedidos.splice(i, 1);
        this.totalPedido();
        this.cont = this.cont - 1;
        break;
      }
    }
  }

  agregarPc() {
    let pro = productos.producto4.nombre
    let pre = productos.producto4.valor
    const pc = new Pedido(pro,pre);
    this.pedidos.push(pc);
    this.totalPedido();
    this.cont = this.cont + 1;
  }

  eliminarPc() {
    let pro = productos.producto4.nombre
    for (let i = 0; i < this.pedidos.length; i++) {
      if (this.pedidos[i].nombre === pro) {
        this.pedidos.splice(i, 1);
        this.totalPedido();
        this.cont = this.cont - 1;
        break;
      }
    }
  }

  totalPedido() {
    this.total = 0;
    for (let i = 0; i < this.pedidos.length; i++) {
      this.total = this.total + this.pedidos[i].costo;
    }
  }
}
