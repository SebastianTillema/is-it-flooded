import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-wave-background',
  standalone: true,
  imports: [],
  templateUrl: './wave-background.component.html',
  styleUrl: './wave-background.component.scss'
})
export class WaveBackgroundComponent {
  @Input({'required': true}) waterLevel!: number;

  constructor(private sanitizer: DomSanitizer) { }

  get style() {
    var heightAboveWater = this.waterLevelToTopHeight(this.waterLevel);
    return this.sanitizer.bypassSecurityTrustStyle(`--height: ${heightAboveWater}%`);
  }

  waterLevelToTopHeight(x: number): number {
    const clamped = Math.min(200, Math.max(80, x * 100)); // Clamp x to [80, 200]
    return ((200 - clamped) / 120) * 100; // Map to [0, 100], with inverse relation
  }

  onKey(event: any) { this.waterLevel = event.target.value as number; }
}
