import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor-animation.html',
  styleUrl: './cursor-animation.css'
})
export class CursorAnimationComponent implements OnInit {
  cursorX = 0;
  cursorY = 0;

  trails: { x: number, y: number, id: number }[] = [];

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;

    this.trails.push({ x: this.cursorX, y: this.cursorY, id: Date.now() });
    if (this.trails.length > 20) {
      this.trails.shift();
    }
  }

  ngOnInit() { }
}
