import { Component } from '@angular/core';

@Component({
  selector: 'general',
  templateUrl: './general.html',
  styles: [`
    .page-header {
      display: inline-block;
      margin: 0;
      min-width: 500px;
      width: 100%;
      height: 200px;
      background-image: url("/assets/bannerImage.png");
      background-color: #cccccc;
      background-position: left calc(var(--scroll)/4);
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: inset 2px 2px 5px 1px rgba(0,0,0,0.56);
    }

    .container {
      height: 100vh;
    }

    .heartwood-wrapper {
      display:flex;
      margin: 20px 0;
    }

    .heartwood {
      display: flex;
      width: 300px;
      height: 175px;
      background-image: url("/assets/heartwood-cover.png");
      background-color: #cccccc;
      background-size: contain;
    }

    div.heartwood-text {
      display:flex;
      padding-left: 10px;
    }

    .heartwood-text > * {
      display: inline;
    }

    @media screen and (width: 500px) {
      .page-header {
        overflow: hidden;
      }
    }
  `]
})
export class GeneralComponent {

}
