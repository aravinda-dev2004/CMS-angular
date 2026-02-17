import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorAnimation } from './cursor-animation';

describe('CursorAnimation', () => {
  let component: CursorAnimation;
  let fixture: ComponentFixture<CursorAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorAnimation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
