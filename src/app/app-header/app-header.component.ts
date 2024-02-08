import { Component } from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {MdbDropdownModule} from "mdb-angular-ui-kit/dropdown";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [
    MdbCollapseModule,
    MdbDropdownModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

}
