import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/portfolio-data';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly socials = SOCIAL_LINKS;
  name = '';
  email = '';
  message = '';
  touched = {
    name: false,
    email: false,
    message: false
  };
  sentMessage = '';

  normalize(value: string): string {
    return value.trimStart();
  }

  isNameValid(): boolean {
    return this.name.trim().length >= 2;
  }

  isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
  }

  isMessageValid(): boolean {
    return this.message.trim().length >= 20;
  }

  isFormValid(): boolean {
    return this.isNameValid() && this.isEmailValid() && this.isMessageValid();
  }

  submit(event: Event): void {
    event.preventDefault();
    this.touched = { name: true, email: true, message: true };

    if (!this.isFormValid()) {
      return;
    }

    this.sentMessage = 'Thanks. Your message is ready for the next build phase.';
    this.name = '';
    this.email = '';
    this.message = '';
    this.touched = { name: false, email: false, message: false };
  }
}