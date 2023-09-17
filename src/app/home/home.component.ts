import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
    <app-image-slide />
    <section class="join">
      <p>Join us in our vision to restore dignity to African.</p>
      <br>
      <em>From Cape to Cairo, Morroco to Madagasca - Izolethu</em>
      <button [routerLink]="['/membership']">Become A Member</button>
    </section>
    <app-posts />
  `,
})
export class HomeComponent {

}
