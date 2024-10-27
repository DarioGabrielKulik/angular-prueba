import { Component } from '@angular/core';

interface Image {
  src: string;
  active: boolean;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  thumbnails: Image[] = [
    { src: 'assets/2.webp', active: true },
    { src: 'assets/3.webp', active: false },
    { src: 'assets/4.webp', active: false },
    { src: 'assets/5.webp', active: false }
  ];

  selectedImage: string = 'assets/1.webp';

  cambiarImagen(src: string, selectedThumb: Image): void {
    // Actualizar imagen principal
    this.selectedImage = src;
    
    // Actualizar estado active de las miniaturas
    this.thumbnails.forEach(thumb => {
      thumb.active = thumb === selectedThumb;
    });
  }

}
