import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweAllItem } from './viwe-all-item';

describe('ViweAllItem', () => {
  let component: ViweAllItem;
  let fixture: ComponentFixture<ViweAllItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViweAllItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViweAllItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
