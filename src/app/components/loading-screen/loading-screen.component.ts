import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.css',
  animations: [
    trigger('loadingState', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.98)' }),
        animate('280ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [animate('320ms ease-in', style({ opacity: 0, transform: 'scale(1.02)' }))])
    ])
  ]
})
export class LoadingScreenComponent {}