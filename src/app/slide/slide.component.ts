import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

    imageUrls = [
      { url: '/assets/img/slide/slide1.jpg', caption: 'Primer slide', href: '#', clickAction: () => console.log('Esto es un evento de img 1') },
      { url: '/assets/img/slide/slide2.jpg', caption: 'Segundo slide', href: '#', clickAction: () => console.log('Esto es un evento de img 2') },
      { url: '/assets/img/slide/slide3.jpg', caption: 'Tercer slide', href: '#', clickAction: () => console.log('Esto es un evento de img 3') },
      { url: '/assets/img/slide/slide4.jpg', caption: 'Cuarto slide', href: '#', clickAction: () => console.log('Esto es un evento de img 4') },
    ];
    height: string = '400px';
    minHeight: string;
    arrowSize: string = '30px';
    showArrows: boolean = true;
    disableSwiping: boolean = false;
    autoPlay: boolean = true;
    autoPlayInterval: number = 3333;
    stopAutoPlayOnSlide: boolean = true;
    debug: boolean = true;
    backgroundSize: string = 'cover';
    backgroundPosition: string = 'center center';
    backgroundRepeat: string = 'no-repeat';
    showDots: boolean = true;
    dotColor: string = '#FFF';
    showCaptions: boolean = true;
    captionColor: string = '#FFF';
    captionBackground: string = 'rgba(0, 0, 0, .35)';
    lazyLoad: boolean = false;
  width: string = '100%';

  constructor() { }

  ngOnInit() {
      // Agregando imágenes dinámicamente
    /*
    setTimeout(() => {
      console.log('adding an image url dynamically.');
      this.imageUrls.push('https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg');
    }, 5000);
    */
  }

}
