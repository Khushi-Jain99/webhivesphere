import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('heroEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(28px) scale(0.98)' }),
        animate('780ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class HeroComponent {
  @Input({ required: true }) stats: Array<{ value: string; label: string }> = [];
  @Output() primaryAction = new EventEmitter<string>();
  @Output() secondaryAction = new EventEmitter<string>();
}