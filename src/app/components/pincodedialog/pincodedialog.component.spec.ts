import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodedialogComponent } from './pincodedialog.component';

describe('PincodedialogComponent', () => {
  let component: PincodedialogComponent;
  let fixture: ComponentFixture<PincodedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PincodedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PincodedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
