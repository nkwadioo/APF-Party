import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <section>
      <img src="/assets/images/logo.jpg" alt="" />
      <nav [class.open]="menuIsOpen">
        <a *ngFor="let item of menuItems" (click)="onSelect(item)" [href]="item.url ?? item.route" [attr.target]="item.url ? '_blank' : null"
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
    { title: 'Gallery', url: 'https://www.facebook.com//profile.php?id=100063993092314&sk=photos_by' },
    { title: 'About Us', route: '/about-us' },
    { title: 'Structure', route: '/structure' },
    { title: 'Library', url: 'https://drive.google.com/drive/folders/1vHrxkoC0CBf0yyliUiUIAkPhlptfKpby?usp=sharing' },
    { title: 'News', url: 'https://www.youtube.com/@africanpeoplefirst' },
    { title: 'Become A Member', route: '/membership'},
    { title: 'Contact Us', route: '/contact-us' },
    // add other menu items here
  ];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }


  onSelect(item: MenuItem): void {
    this.menuIsOpen = false;
    this.menuSelected.emit(item);
  }

  isActive(route: string | undefined): boolean {
    // Compare the current route with the route you're checking
    return this.router.url === route;
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}


interface MenuItem {
  title: string;
  route?: string;
  url?: string
}