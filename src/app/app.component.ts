import { Component,  ElementRef, AfterViewInit , OnInit} from '@angular/core';
const ScrollReveal = require('scrollreveal');
import Typed from 'typed.js';
import { DownloadServiceService } from './download-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit { 

  title = 'proyecto-devops';

  sections: any[] = [];

  constructor(
    private el: ElementRef,
    private downloadService: DownloadServiceService
    ){}

  async ngOnInit() {

    let ScrollReveal;
    await import('scrollreveal').then(module => {
        ScrollReveal = module.default;
    });
    // Animación general
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
    });

    // HOME
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });

    // PROJECT BOX
    sr.reveal('.project-box', { interval: 200 });

    // HEADINGS
    sr.reveal('.top-header', {});

    // Animación desde la izquierda
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    // Animación desde la derecha
    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });
  }

  ngAfterViewInit() {
    this.sections = this.el.nativeElement.querySelectorAll('section[id]');
    window.addEventListener('scroll', this.scrollActive.bind(this));

    let options = {
      strings: ["Designer", "Youtuber", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    };

    let typed = new Typed(".typedText", options);
  }

  scrollActive() {
    const scrollY = window.scrollY;

    this.sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        this.el.nativeElement.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
        this.el.nativeElement.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
    });
  }

  ngOnDestroy() {
    // Es importante eliminar el evento cuando el componente se destruye para evitar fugas de memoria.
    window.removeEventListener('scroll', this.scrollActive.bind(this));
  }

  private pdfUrl: string = '../assets/data/pdf/Yorlin_Quispe_Ygnacio_cv.pdf';

  downloadPDF() {
    this.downloadService.downloadFile(this.pdfUrl);
  }

}
