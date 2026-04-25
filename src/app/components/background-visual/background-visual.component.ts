import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-background-visual',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './background-visual.component.html',
  styleUrl: './background-visual.component.css'
})
export class BackgroundVisualComponent {}