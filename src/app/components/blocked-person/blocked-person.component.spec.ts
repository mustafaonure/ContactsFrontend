import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedPersonComponent } from './blocked-person.component';

describe('BlockedPersonComponent', () => {
  let component: BlockedPersonComponent;
  let fixture: ComponentFixture<BlockedPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
