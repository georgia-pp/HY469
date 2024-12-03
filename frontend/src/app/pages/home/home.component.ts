import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMessage: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}