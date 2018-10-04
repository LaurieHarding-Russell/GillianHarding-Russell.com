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
      box-shadow: inset 2px 2px 5px 1px rgba(0,0,0,0.56);
    }

    .container {
      height: 100vh;
    }
  `]
})
export class GeneralComponent {

}
