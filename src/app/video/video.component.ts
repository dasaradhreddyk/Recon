import { Component, OnInit } from '@angular/core';


@Component({
  template: '<youtube-player  suggestedQuality="highres" videoId="44e4ints7eA"></youtube-player>',
  selector: 'app-video'
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
