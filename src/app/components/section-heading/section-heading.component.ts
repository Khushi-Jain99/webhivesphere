import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.css'
})
export class SectionHeadingComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input() align: 'left' | 'center' = 'left';
}