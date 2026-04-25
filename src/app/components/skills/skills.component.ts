import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_CLUSTERS } from '../../core/portfolio-data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly skills = SKILL_CLUSTERS;
}