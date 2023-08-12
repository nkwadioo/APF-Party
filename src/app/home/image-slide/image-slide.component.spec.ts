import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlideComponent } from './image-slide.component';

describe('ImageSlideComponent', () => {
  let component: ImageSlideComponent;
  let fixture: ComponentFixture<ImageSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSlideComponent]
    });
    fixture = TestBed.createComponent(ImageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
