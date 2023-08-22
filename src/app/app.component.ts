import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="container">
    <app-menu (menuSelected)="changeNavigation($event)" />
    <router-outlet></router-outlet>
    <app-footer />
  </div>
  `
})
export class AppComponent {
  title = 'APF-Party';

  constructor(private router: Router) {}

  changeNavigation(item: any) {
    this.router.navigate([item.route]);
  }
}
