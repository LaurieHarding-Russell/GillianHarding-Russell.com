import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.html'
})
export class BookComponent {
  @Input() image = "";

}
