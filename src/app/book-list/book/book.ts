import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.html',
  styles: [`
  @keyframes pulse {
    0%   {
      color: #666;
      text-shadow: 2px 2px #00000000;
    }
    50% {
      color: #777;
      text-shadow: 2px 5px #00000011; /* FIXME, Too much? */
    }
    100% {
      color: #666;
      text-shadow: 2px 2px #00000000;
    }
  }

    .book {
      display: flex;
      background: #ddd;
      border-left: 10px solid var(--primary-colour);
      margin: 25px 0 0 0;
      box-shadow: 2px 2px 3px 1px rgba(0,0,0,0.26);
      width:100%;
    }

    .info {
      flex: 20%;
      display:block;
      background: #eee;
      padding: 5px;
    }

    .book-image {
      width:100px;
      display: block;
      margin: 0 auto;
    }
    
    .content {
      flex: 80%;
      display:block;
      margin-left:5px;
      padding: 5px;
      overflow: auto;
    }

    .book-content-toggle {
      display: block;
      font-weight: 600;
    }

    .book-content-toggle:hover {
      cursor: pointer;
      animation-name: pulse;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    .credit {
      color: var(--primary);
    }

    .id {
      color: #999;
    }

    
  `]
})
export class BookComponent {
  @Input() image = "";
  @Input() credit = "";
  @Input() id = "";
  @Input() publish = "";
  @Input() description = "";
  show = false;
}