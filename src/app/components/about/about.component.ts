import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_POINTS } from '../../core/portfolio-data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly points = ABOUT_POINTS;
}
