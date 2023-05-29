import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonTemplateComponent } from './app-common-template.component';

describe('AppCommonTemplateComponent', () => {
  let component: AppCommonTemplateComponent;
  let fixture: ComponentFixture<AppCommonTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCommonTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCommonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
