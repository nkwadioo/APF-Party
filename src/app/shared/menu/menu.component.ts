import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <section>
      <img src="/assets/images/logo.jpg" alt="" />
      <nav [class.open]="menuIsOpen">
        <a *ngFor="let item of menuItems" (click)="onSelect(item)" [routerLink]="item.route" [href]="item.url ?? item.route"
          [class.active]="isActive(item.route)">
          {{item.title}}
        </a>
      </nav>
      <div class="menu" (click)="toggleMenu()">
        <div class="strip"></div>
        <div class="strip"></div>
        <div class="strip"></div>
      </div>
    </section>
  `,
})
export class MenuComponent {
  @Output() menuSelected = new EventEmitter<MenuItem>();

  menuIsOpen = false;

  menuItems: MenuItem[] = [
    { title: 'Home', route: '/home' },
    { title: 'About Us', route: '/about-us' },
    { title: 'Structure', route: '/structure' },
    { title: 'Become A Membership', route: '/membership', url: 'https://www.google.com' },
    { title: 'Contact Us', route: '/contact-us' },
    // add other menu items here
  ];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }


  onSelect(item: MenuItem): void {
    this.menuIsOpen = false;
    this.menuSelected.emit(item);
  }

  isActive(route: string): boolean {
    // Compare the current route with the route you're checking
    return this.router.url === route;
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}


interface MenuItem {
  title: string,
  route: string,
  url?: string
}