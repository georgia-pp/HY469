import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent {
  documents = [
    {
      title: 'Corporate bylaws',
      image: 'assets/images/document1.png' // Αντικατάστησε με το σωστό path
    },
    {
      title: '2016 Analysis',
      image: 'assets/images/document2.png' // Αντικατάστησε με το σωστό path
    },
    {
      title: 'Sample Document',
      image: 'assets/images/document3.png' // Αντικατάστησε με το σωστό path
    }
  ];
}
