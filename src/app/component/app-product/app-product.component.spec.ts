import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductComponent } from './app-product.component';

describe('AppProductComponent', () => {
  let component: AppProductComponent;
  let fixture: ComponentFixture<AppProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
