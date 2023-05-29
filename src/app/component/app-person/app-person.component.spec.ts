import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPersonComponent } from './app-person.component';

describe('AppPersonComponent', () => {
  let component: AppPersonComponent;
  let fixture: ComponentFixture<AppPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
