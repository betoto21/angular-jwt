import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AppHeaderComponent} from "./app-header/app-header.component";
import {AppFooterComponent} from "./app-footer/app-footer.component";
import {DirectivaComponent} from "./directiva/directiva.component";
import {ClientesComponent} from "./clientes/clientes.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'clientes-app';
}
