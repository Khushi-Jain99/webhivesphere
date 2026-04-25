import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NavLink, SocialLink } from '../../core/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input({ required: true }) links: NavLink[] = [];
  @Input({ required: true }) socialLinks: SocialLink[] = [];
  @Output() navigate = new EventEmitter<string>();

  menuOpen = false;
  activeTarget = 'home';

  onNavigate(target: string, event: MouseEvent): void {
    event.preventDefault();
    this.menuOpen = false;
    this.activeTarget = target;
    this.navigate.emit(target);
  }
}