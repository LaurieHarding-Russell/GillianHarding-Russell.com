import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  template: `
    <div class="menu">
      <a routerLink="/">General</a>
      <a routerLink="/books">Books</a>
      <a routerLink="/about">About</a>
      <a routerLink="/awards">Literary Awards</a>
    </div>
  `,
  styleUrls: ["menu.css"]
})
export class MenuComponent {
    
}
