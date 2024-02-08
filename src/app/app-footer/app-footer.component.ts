import { Component } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  standalone: true,
  imports: [],
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
  public autor: any = {nombre : 'Daniel', apellido: 'Felix'};

}
