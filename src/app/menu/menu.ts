import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  template: `
    <div class="menu">
      <a routerLink="/">General</a>
      <a routerLink="/about">About</a>
      <a routerLink="/books">Books</a>
    </div>
  `,
  styles:[`
    :host {
      width: 100%;
      display: inline-block;
      position: fixed;
      z-index:10;
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      background: #dddddd66;
      margin:0;
    }

    .menu:hover {
      background: #dddddd;
    }

    a {
      margin: 0 15px;
      color: #666;
    }

    a:hover {
      color: #000000;
    }

  `]
})
export class MenuComponent {
    
}
