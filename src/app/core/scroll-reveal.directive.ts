import { AfterViewInit, Directive, ElementRef, NgZone, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>, private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    element.classList.add('reveal-start');

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            return;
          }

          this.zone.run(() => {
            element.classList.add('reveal-visible');
          });
          this.observer?.unobserve(element);
        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px'
        }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}