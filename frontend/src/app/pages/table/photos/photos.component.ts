import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos = [
    {
      title: 'Best uni ever built photo',
      image: 'assets/images/document1.png'
    },
    {
      title: 'Car photo',
      image: 'assets/images/document1.png'
    },
    {
      title: 'Dog photo',
      image: 'assets/images/document2.png'
    },
  ];
}
