import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <section>
      <img src="/assets/images/logo.jpg" alt="" />
      <nav>
        <a *ngFor="let item of menuItems" (click)="onSelect(item)" [routerLink]="item.route"
          [class.active]="isActive(item.route)">
          {{item.title}}
        </a>
      </nav>
    </section>
  `,
})
export class MenuComponent {
  @Output() menuSelected = new EventEmitter<MenuItem>();

  menuItems: MenuItem[] = [
    { title: 'Home', route: '/home' },
    { title: 'About Us', route: '/about-us' },
    { title: 'Structure', route: '/structure' },
    { title: 'Become A Membership', route: '/membership' },
    { title: 'Contact Us', route: '/contact-us' },
    // add other menu items here
  ];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }


  onSelect(item: MenuItem): void {
    this.menuSelected.emit(item);
  }

  isActive(route: string): boolean {
    // Compare the current route with the route you're checking
    return this.router.url === route;
  }
}


interface MenuItem {
  title: string,
  route: string
}