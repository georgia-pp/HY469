import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  filesOpen: boolean = true;
  showFiles: boolean = true;

  toggleFiles() {
    this.showFiles = !this.showFiles;
    this.filesOpen = !this.filesOpen;
  }

  files = [
    {
      title: 'Corporate bylaws',
      image: 'assets/images/document1.png' // Αντικατάστησε με το σωστό path
    },
    {
      title: '2016 Analysis',
      image: 'assets/images/document2.png' // Αντικατάστησε με το σωστό path
    }
  ];
}
