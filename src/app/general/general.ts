import { Component } from '@angular/core';

@Component({
  selector: 'general',
  templateUrl: './general.html',
  styles: [`
    .page-header {
      display: inline-block;
      margin: 0;
      width: 100%;
      height: 200px;
      background-image: url("/assets/bannerImage.JPG");
      background-color: #cccccc;
      background-position: left var(--scroll);
      background-repeat: no-repeat;
      background-size: cover;
  }
  `]
})
export class GeneralComponent {

}
