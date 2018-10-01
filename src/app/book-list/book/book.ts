import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.html',
  styles: [`
    :host{
      display: flex;
    }

    .book {
      background: #eee;
      margin: 25px 0 0 0;
      padding: 5px;
      border: 2px solid rgba(125,125,125, 0.1);
      width:100%;
    }

    .book-image {
      float: left;
      width:100px;
    }
    
    .content {
      margin-left:5px;
    }

    .credit {
      color: #999;
    }
  `]
})
export class BookComponent {
  @Input() image = "";
  @Input() credit = "";
}
