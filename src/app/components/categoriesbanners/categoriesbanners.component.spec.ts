import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesbannersComponent } from './categoriesbanners.component';

describe('CategoriesbannersComponent', () => {
  let component: CategoriesbannersComponent;
  let fixture: ComponentFixture<CategoriesbannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesbannersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesbannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
