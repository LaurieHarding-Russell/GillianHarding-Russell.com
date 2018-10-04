import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.html',
  styles: [`

    .book {
      display: flex;
      background: #ddd;
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
}
