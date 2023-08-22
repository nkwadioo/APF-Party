import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-contact-us',
  template:   `
    <app-header [title]="'Contact Us'" />

    <section class="container">
      <h3>Our Offices</h3>
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div *ngFor="let location of locations" class="swiper-slide">
            <div class="info">
              <a *ngFor="let info of location.info" [href]="info.url" class="details">
                <img [src]="info.icon" alt="" />
                <span>{{info.description}}</span>
              </a>
            </div>
            <img [src]="location.map" [alt]="location.name">
          </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <div class="spliter"></div>

    <em>We're excited to hear from you! If you have questions, suggestions, or simply want to connect, you're in the right place. Your input matters, and we're here to engage with you. Let's work together to shape a better future for South Africa.</em>

    <div class="links">
      <a *ngFor="let link of socials" [href]="link.url"><img [src]="link.icon" [alt]="link.name" target="_blank"></a>
    </div>
  `,
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  locations = [
    {
      name: 'Head Office map location',
      map: '/assets/images/contact-us/HeadOffice.png',
      url: 'https://goo.gl/maps/cWo2zHiMhSwDNsfU9',
      info: [
        {
          icon: '/assets/images/contact-us/googleMaps.png',
          url: 'https://goo.gl/maps/cWo2zHiMhSwDNsfU9',
          description: '43 Turners Ave, Bulwer, Berea, 4083'
        },
        {
          icon: '/assets/images/contact-us/phone.png',
          url: 'tel:+27618104804',
          description: '0618104804'
        }
      ]
    },
    {
      name: 'Johannesburg district map location',
      map: '/assets/images/contact-us/johannesburg.png',
      info: [
        {
          icon: '/assets/images/contact-us/googleMaps.png',
          url: 'https://goo.gl/maps/eVT1X8GgriK4xE1YA',
          description: '3 Eloff St, Wemmer, Johannesburg, 2001'
        },
        {
          icon: '/assets/images/contact-us/phone.png',
          url: 'tel:+27618104804',
          description: '0618104804'
        }
      ]
    },
  ];

  socials = [
    {
      url: 'https://twitter.com/GODIGITALDOC',
      icon: '/assets/images/contact-us/twitter.png',
      name: 'twitter link',
    },
    {
      url: 'https://www.facebook.com/people/African-People-First-APF/100063993092314/',
      icon: '/assets/images/contact-us/facebook.png',
      name: 'facebook link',
    },
    {
      url: 'https://wa.me/27618104804',
      icon: '/assets/images/contact-us/whatsapp.png',
      name: 'whatsApp African People First',
    },
    {
      url: 'mailto:info@africanpeoplefirst.org',
      icon: '/assets/images/contact-us/mail.png',
      name: 'send mail to African People First',
    },
  ]

  constructor() { }
  
  ngOnInit(): void {
    new Swiper('.swiper', {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // on: {
      //   autoplayTimeLeft(s, time, progress) {
      //     progressCircle.style.setProperty("--progress", 1 - progress);
      //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      //   }
      // }
    });
  }
  
}
