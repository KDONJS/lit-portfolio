import { Component, HostListener, ElementRef } from '@angular/core';
import { DownloadServiceService } from '../download-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isResponsive: boolean = false;
  constructor(
    private el: ElementRef,
    private downloadService : DownloadServiceService
    ) {}

  toggleMenu(): void {
    this.isResponsive = !this.isResponsive;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.headerShadow();
  }

  private headerShadow() {
    const navHeader = this.el.nativeElement.querySelector('#header');

    if (window.pageYOffset > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }

  private pdfUrl: string = '../../assets/data/pdf/Yorlin_Quispe_Ygnacio_cv.pdf';

  downloadPDF() {
    this.downloadService.downloadFile(this.pdfUrl);
  }
}
