import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadServiceService {

  constructor(private http: HttpClient) { }

  downloadFile(file: string) {
    this.http.get(file, { responseType: 'blob' }).subscribe(blob => {
      // Asegúrate de que el objeto blob no sea nulo.
      if (!blob) {
        // Lanza un error personalizado.
        throw new Error('El archivo PDF no está disponible.');
      }

      saveAs(blob, 'Yorlin_Quispe_CV.pdf');
    });
  }
}