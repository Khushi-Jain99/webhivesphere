import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../core/portfolio-data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}