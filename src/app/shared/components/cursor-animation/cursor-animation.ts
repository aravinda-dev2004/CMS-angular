import {
  Component, HostListener, OnInit, OnDestroy, NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Sparkle {
  id: number;
  x: number; y: number;
  size: number;
  opacity: number;
  scale: number;
  rot: number;
  color: string;
}

interface Ripple {
  id: number;
  x: number; y: number;
}

@Component({
  selector: 'app-cursor-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor-animation.html',
  styleUrl: './cursor-animation.css'
})
export class CursorAnimationComponent implements OnInit, OnDestroy {

  // Dot tracks cursor exactly
  cursorX = -100;
  cursorY = -100;

  // Ring smoothly lags behind
  ringX = -100;
  ringY = -100;
  private targetX = -100;
  private targetY = -100;
  private rafId: number | null = null;

  clicking = false;
  sparkles: Sparkle[] = [];
  ripples: Ripple[] = [];

  private sparkleId = 0;
  private rippleId = 0;
  private lastSparkleTime = 0;

  private readonly SPARKLE_COLORS = [
    'rgba(167, 139, 250, 0.9)',  // purple
    'rgba(96, 165, 250, 0.9)',   // blue
    'rgba(251, 191, 36, 0.9)',   // amber
    'rgba(52, 211, 153, 0.9)',   // emerald
    'rgba(248, 113, 113, 0.9)',  // rose
    'rgba(255, 255, 255, 0.85)', // white
  ];

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    // Run smooth ring lerp outside Angular for performance
    this.ngZone.runOutsideAngular(() => {
      const lerp = () => {
        const ease = 0.12;
        this.ringX += (this.targetX - this.ringX) * ease;
        this.ringY += (this.targetY - this.ringY) * ease;
        this.rafId = requestAnimationFrame(lerp);
      };
      this.rafId = requestAnimationFrame(lerp);
    });
  }

  ngOnDestroy() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    this.targetX = e.clientX;
    this.targetY = e.clientY;

    // Throttle sparkles to every ~30ms
    const now = Date.now();
    if (now - this.lastSparkleTime > 30) {
      this.lastSparkleTime = now;
      this.addSparkle(e.clientX, e.clientY);
    }
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    this.clicking = true;
    this.addRipple(this.cursorX, this.cursorY);
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.clicking = false;
  }

  private addSparkle(x: number, y: number) {
    const spread = 18;
    const sparkle: Sparkle = {
      id: this.sparkleId++,
      x: x + (Math.random() - 0.5) * spread,
      y: y + (Math.random() - 0.5) * spread,
      size: Math.random() * 5 + 2,
      opacity: Math.random() * 0.7 + 0.3,
      scale: 1,
      rot: Math.random() * 360,
      color: this.SPARKLE_COLORS[Math.floor(Math.random() * this.SPARKLE_COLORS.length)],
    };
    this.sparkles.push(sparkle);

    // Animate out
    setTimeout(() => {
      sparkle.opacity = 0;
      sparkle.scale = 0;
    }, 50);

    // Remove
    setTimeout(() => {
      this.sparkles = this.sparkles.filter(s => s.id !== sparkle.id);
    }, 450);
  }

  private addRipple(x: number, y: number) {
    const ripple: Ripple = {
      id: this.rippleId++, x, y
    };
    this.ripples.push(ripple);
    setTimeout(() => {
      this.ripples = this.ripples.filter(r => r.id !== ripple.id);
    }, 650);
  }

  trackSparkle(_: number, s: Sparkle) { return s.id; }
  trackRipple(_: number, r: Ripple) { return r.id; }
}
