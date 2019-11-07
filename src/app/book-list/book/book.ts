import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.html',
  styleUrls: [`book.css`]
})
export class BookComponent {
  @Input() image = "";
  @Input() imageFallback = "";
  @Input() credit = "";
  @Input() id = "";
  @Input() publish = "";
  @Input() description = "";
  @Input() title = "";
  show = false;
}