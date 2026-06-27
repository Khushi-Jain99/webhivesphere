import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ABOUT_DETAILS, ABOUT_INTRO_FULL, ABOUT_INTRO_SHORT, ABOUT_POINTS } from '../../core/portfolio-data';
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
  readonly introShort = ABOUT_INTRO_SHORT;
  readonly introFull = ABOUT_INTRO_FULL;
  readonly journey = ABOUT_DETAILS.journey;
  readonly skillsSummary = ABOUT_DETAILS.skillsSummary;
  readonly goals = ABOUT_DETAILS.goals;
  readonly isExpanded = signal(false);

  toggleExpanded(): void {
    this.isExpanded.update((value) => !value);
  }
}
