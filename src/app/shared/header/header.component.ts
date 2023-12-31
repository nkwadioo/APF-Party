import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <header>
      <span class="title">{{title}}</span>
      <img src="/assets/images/strips.png" alt="">
    </header>
  `,
})
export class HeaderComponent {

  @Input() title = '';

}
