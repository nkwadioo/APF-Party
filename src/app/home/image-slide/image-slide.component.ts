import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  styleUrls: ['./image-slide.component.scss'],
  template: `
  <section id="image-section">
      <div class="container">
        <article id="contain-image">
          <div class="image-wrapper" *ngFor="let slide of sliderImages">
            <img [src]="slide.image" alt="Image" class="img">
            <span class="captions" [ngClass]="slide.classes">
              <div class="caption" *ngFor="let caption of slide.captions">{{caption}}</div>
            </span>
          </div>
          <!-- <div id="contain-button">
            <ion-icon name="radio-button-on" class="button" id="button1"></ion-icon>
            <ion-icon name="radio-button-on" class="button" id="button2"></ion-icon>
            <ion-icon name="radio-button-on" class="button" id="button3"></ion-icon>
            <ion-icon name="radio-button-on" class="button" id="button4"></ion-icon>
            <ion-icon name="radio-button-on" class="button" id="button5"></ion-icon>
            <ion-icon name="radio-button-on" class="button" id="button6"></ion-icon>
            <ion-icon name="radio-button-on" class="button" id="button7"></ion-icon>
          </div> -->
        </article>
        <div id="contain-button">
          <input *ngFor="let slide of sliderImages" type="radio" name="slide-indicator" id="">
        </div>
      </div>
    </section>
  `,
})
export class ImageSlideComponent implements AfterViewInit {
  slider = 0;
  private timeoutId: any;

  sliderImages: {image: string, captions: string[], classes: string[]}[] = [
    {
    image: 'assets/images/slider/event 3.png',
    classes: ['striped', 'bottom', 'right', 'mega'],
    captions: [
      'Together',
      'With one voice, we can unit',
      'All of Africa as One'
    ]},
    {
      image: 'assets/images/slider/event 2.png',
      classes: ['black', 'bottom', 'center', 'mega'],
      captions: ['Our beloved comitte 2023']},
    // {image: 'assets/images/slider/event 2.png', captions: ['Hello']},
    // {image: 'assets/images/slider/event 4.png', captions: ['Love']},
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.slide()
  }

  slide() {
    try {
      const images: any = document.getElementsByClassName("image-wrapper");
      if(!images || !images.length) {throw Error('No images found');}
      const button: any= document.querySelectorAll("input");
    
      for (let i = 0; i < images.length; i++) {
        images[i].style = "display:none";
      }
    
      this.slider = this.slider ? this.slider + 1 : 1;
      if (this.slider > images.length) {
        this.slider = 1;
      }
    
      images[this.slider - 1].style = "display:flex";
      button[this.slider - 1].checked = true;
      this.timeoutId = setTimeout(() => this.slide(), 3000);
    }catch(error){
      if(this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      setTimeout(() => {}, 100);
      this.slide();
    }
  
  }

  ngonDestroy() {
    if(!this.timeoutId) return;
    clearTimeout(this.timeoutId());
  }

}
