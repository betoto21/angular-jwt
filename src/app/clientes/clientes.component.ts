import {Component, OnInit} from '@angular/core';
import {Cliente} from "./cliente";
import {NgForOf} from "@angular/common";
import {ClienteService} from "./cliente.service";


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit{
  clientes: Cliente[];

  constructor(private clientesService: ClienteService) {
    clientesService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
  ngOnInit(): void {
  }



}
