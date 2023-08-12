import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-menu />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'APF-Party';
}