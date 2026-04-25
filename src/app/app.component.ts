import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BackgroundVisualComponent } from './components/background-visual/background-visual.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { NAV_LINKS, HERO_STATS, SOCIAL_LINKS } from './core/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BackgroundVisualComponent, LoadingScreenComponent, NavbarComponent, HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <app-background-visual></app-background-visual>

    @if (isLoading()) {
      <app-loading-screen></app-loading-screen>
    }

    <div class="site-shell">
      <app-navbar [links]="navLinks" [socialLinks]="socialLinks" (navigate)="scrollTo($event)"></app-navbar>

      <main id="main-content" class="site-main">
          <app-hero [stats]="heroStats" (primaryAction)="scrollTo($event)" (secondaryAction)="scrollTo($event)"></app-hero>
          <app-about></app-about>
          <app-projects></app-projects>
          <app-skills></app-skills>
          <app-contact></app-contact>
      </main>

      <footer class="site-footer">
        <p>© 2026 WebHiveSphere. Crafted for modern digital products.</p>
        <p>Angular Standalone • Fast UI • Accessible by default</p>
      </footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  readonly isLoading = signal(true);
  readonly navLinks = NAV_LINKS;
  readonly heroStats = HERO_STATS;
  readonly socialLinks = SOCIAL_LINKS;
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('WebHiveSphere | Modern Product Portfolio');
    this.meta.updateTag({
      name: 'description',
      content: 'WebHiveSphere is a modern product-style Angular portfolio with clear sections, clean cards, and smooth, user-friendly interactions.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'WebHiveSphere | Modern Product Portfolio' });
    this.meta.updateTag({ property: 'og:description', content: 'A clean and premium Angular portfolio with familiar structure and polished visual design.' });

    window.setTimeout(() => this.isLoading.set(false), 1400);
  }

  scrollTo(target: string): void {
    const element = document.getElementById(target);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}