import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CursorAnimationComponent } from './shared/components/cursor-animation/cursor-animation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursorAnimationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
  protected readonly title = signal('ex-01');


}
