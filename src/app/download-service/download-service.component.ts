import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-service',
  templateUrl: './download-service.component.html',
  styleUrls: ['./download-service.component.css']
})
export class DownloadServiceComponent {
  
  constructor() { }

  downloadFile(file: string) {
    fetch(file).then(response => response.blob()).then(blob => {
      saveAs(blob, 'CV.pdf');
    });
  }

}
