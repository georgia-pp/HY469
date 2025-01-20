import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent { 
  documents = [
    {
      title: 'hy469_project.pdf',
      image: 'assets/images/document1.png' 
    },
    {
      title: 'Angular_tutorial.pdf',
      image: 'assets/images/document1.png' 
    },
    {
      title: 'System_analysis.pdf',
      image: 'assets/images/document2.png' 
    },
    {
      title: 'data_stractures.pdf',
      image: 'assets/images/document2.png' 
    }

  ];
}
