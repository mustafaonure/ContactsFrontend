import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePersonComponent } from './favorite-person.component';

describe('FavoritePersonComponent', () => {
  let component: FavoritePersonComponent;
  let fixture: ComponentFixture<FavoritePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
