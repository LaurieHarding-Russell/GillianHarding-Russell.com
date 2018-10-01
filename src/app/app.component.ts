import { Component, OnInit, OnDestroy, Renderer2, ElementRef, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'Gillian Harding-Russell';

  constructor(private element: ElementRef) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {
    this.element.nativeElement.style.setProperty('--scroll', `${window.scrollY}px`);

    // FIXME, I've got to think where to put this menu logic.
    if (window.scrollY > 40) {
      this.element.nativeElement.style.setProperty('--scroll-bar-colour', `#dddddd`);
    } else {
      this.element.nativeElement.style.setProperty('--scroll-bar-colour', `#dddddd66`);
    }
  };
}
