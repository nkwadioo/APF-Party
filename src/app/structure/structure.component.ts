import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-structure',
  styleUrls: ['./structure.component.scss'],
  template: `
    <app-header title="Structure">
      <a href="/assets/APF constitution.pdf" target="_blank"><button>constitution.pdf</button></a>
    </app-header>

    <div class="container">
      <main>
        <section class="topic">
          <h3>Main Organs</h3>
          <ol>
            <li><span class="sub-heading">National Level</span>: The National Conference: Elects the National Executive Committee (NEC), forming the highest decision-making body within the organization.</li>
            <li><span class="sub-heading">Provincial Level</span>: The Provincial Conference: Elects the Provincial Executive Committee (PEC), responsible for the party's actions at the provincial level.</li>
            <li><span class="sub-heading">Regional Level</span>: The Regional Conference: Elects the Regional Executive Committee (REC), coordinating the party's activities within the region.</li>
            <li><span class="sub-heading">Branch Level</span>: The Branch Annual General Meeting: Elects the Branch Executive Committee (BEC), driving the grassroots engagement and initiatives of the party.</li>
          </ol>
        </section>
        <section class="topic">
          <h3>Specialized Organs</h3>
          <ol>
            <li><span class="sub-heading">APF Women's League</span> (MAMA AFRICA):
              <ul>
                <li>Open to women who are members of APF.</li>
                <li>Structured at the national, provincial, and branch levels.</li>
                <li>Focuses on defending and advancing women's rights and ensuring their full participation in all areas of life.</li>
              </ul>
            </li>
            <li><span class="sub-heading">APF Young Lions</span>: 
              <ul>
                <li>Open to individuals aged 13 to 35 (full membership of APF required for those over 18).</li>
                <li>Operates on a national, provincial, and branch basis.</li>
                <li>Aims to unite and lead the youth in confronting youth-related problems, enhancing education, enterprise development, training, and skill development.</li>
                <li>Works towards eradicating poverty and sustaining economic freedom for the youth.</li>
              </ul>
            </li>
          </ol>
        </section>
      </main>
      <!-- <section class="images">
        <picture>
          <img src="" alt="" srcset="">
        </picture>
      </section> -->
    </div>
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div *ngFor="let member of members" class="swiper-slide">
          <img [src]="member.image" [alt]="member.name">
          <div class="info">
            <h4 class="title">{{member.title}}</h4>
            <p class="name">{{member.name}}</p>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- <div class="carousal swiper">
      <div *ngFor="let member of members" class="images">
        <img [src]="member.image" [alt]="member.name">
        <div class="info">
          <h4 class="title">{{member.title}}</h4>
          <p class="name">{{member.title}}</p>
        </div>
      </div>
    </div> -->
  `,
})
export class StructureComponent implements AfterViewInit  {
  // swiper = new Swiper(".swiper", {
  //   effect: "cards",
  //   loop: true,
  //   grabCursor: true,
  // });
  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    // const images = this.el.nativeElement.querySelectorAll('.images');

    // images.forEach((image: HTMLDivElement , index: number) => {
    //   const delay = index * 90;
    //   image.classList.add('fadeInSlide');
    //   image.style.animationDelay = delay + 'ms';
    // });

    new Swiper('.swiper', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  }

  members = [
    {
      name: 'Muzi Hlengwa',
      title: 'President',
      image: '/assets/images/structure/president - muzi Hlengwa.png'
    },
    {
      name: 'ND Dlamini',
      title: 'Deputy President',
      image: '/assets/images/structure/Deputy President.png'
    },
    {
      name: 'Julie Allen Mbuthuma',
      title: 'Secretary General',
      image: '/assets/images/structure/Secretary General - Julie Allen Mbuthuma.png'
    },
    {
      name: 'Morris Morena Glory',
      title: '1st Deputy Secretary General',
      image: '/assets/images/structure/1st Deputy Secretary General.png'
    },
    {
      name: 'Dududu Maganu',
      title: 'Natinal Treasurer',
      image: '/assets/images/structure/National Treasurer - Dududu Maganu.png'
    },
    {
      name: 'BJ Hlengwe',
      title: 'Natinal Chairperson',
      image: '/assets/images/structure/National Chairperson - BJ Hlengwe.png'
    },
  ]

  
}
