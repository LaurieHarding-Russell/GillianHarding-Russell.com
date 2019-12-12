import { Component } from '@angular/core';

@Component({
  selector: 'general',
  templateUrl: './general.html',
  styles: [`
    :host {

    }

    header {
      display: block;
      height: 200px
    }
    .page-header::before{
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
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
      width: auto;
      max-width: 150px;
      height: auto;
      background-color: #cccccc;
      background-size: contain;
    }

    .heartwood img{
      width: 100%;
    }

    div.heartwood-text {
      white-space: pre-line;
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

    @media screen and (max-width: 500px) {
      .heartwood {
        display:none;
      }
    }
  `]
})
export class GeneralComponent {

}
