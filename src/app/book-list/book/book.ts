import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.html',
  styleUrls: [`book.css`]
})
export class BookComponent {
  @Input() image = "";
  @Input() credit = "";
  @Input() id = "";
  @Input() publish = "";
  @Input() description = "";
  show = false;
}