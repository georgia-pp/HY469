import { Component, OnDestroy, } from '@angular/core';

@Component({
  selector: 'music-widget',
  templateUrl: './music-widget.component.html',
  styleUrls: ['./music-widget.component.scss']
})
export class MusicWidgetComponent implements OnDestroy {
  isPlaying: boolean = false;
  progress: number = 0;
  totalDuration: number = 100;
  intervalId: any;

  i: number = 0;
  trackInfo: { artist: string, track_name: string, pic: string }[] = [
    {
      artist: "Nikos Oikonomopoulos",
      track_name: "Melagholia mou",
      pic: "assets/oikon.jpg"
    },
    {
      artist: "Vasilis Karas",
      track_name: "Tilefonise mou",
      pic: "assets/karas.jpg"
    },
    {
      artist: "Nikos Makropoulos",
      track_name: "Den peirazei",
      pic: "assets/makr.jpg"
    }
  ];

  togglePlay(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startProgress();
    } else {
      this.stopProgress();
    }
  }

  startProgress(): void {
    this.intervalId = setInterval(() => {
      if (this.progress < this.totalDuration) {
        this.progress++;
      } else {
        this.stopProgress();
        this.playnexttrack()
          ;
      }
    }, 100);
  }

  stopProgress(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    this.stopProgress();
  }

  playnexttrack(): void {
    this.isPlaying = false;
    this.progress = 0;
    if (this.i == 2) {
      this.i = 0;
    }
    else {
      this.i++;
    }
  }
}
