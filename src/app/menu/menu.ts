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
      top:0;
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      background: var(--scroll-bar-colour);
      margin:0;
    }

    .menu:hover {
      background: #dddddddd;
    }

    a {
      margin: 0 15px;
      color: #444444dd;
      font-family: var(--font-title);
    }

    a:hover {
      color: #000000;
    }

  `]
})
export class MenuComponent {
    
}
