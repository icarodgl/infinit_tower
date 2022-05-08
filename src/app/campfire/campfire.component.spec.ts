import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampfireComponent } from './campfire.component';

describe('CampfireComponent', () => {
  let component: CampfireComponent;
  let fixture: ComponentFixture<CampfireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampfireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
