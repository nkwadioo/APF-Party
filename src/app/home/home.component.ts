import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
    <app-image-slide />
    <section class="join">
      <p>Join us in our mission to create a just, equal, and prosperous nation for all citizens</p>
      <button [routerLink]="['/membership']">Become A Member</button>
    </section>
    <app-posts />
  `,
})
export class HomeComponent {

}
