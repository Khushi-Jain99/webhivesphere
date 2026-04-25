import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundVisualComponent } from './background-visual.component';

describe('BackgroundVisualComponent', () => {
  let component: BackgroundVisualComponent;
  let fixture: ComponentFixture<BackgroundVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundVisualComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});