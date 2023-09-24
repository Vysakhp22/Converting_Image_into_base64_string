import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
//convert image into base64 string
  public convertToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        console.log('Conversion complete.');
        const base64String = reader.result as string;
        resolve(base64String);
      }
      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(file);
    });
  }
}
