import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAddressComponent } from './set-address.component';

describe('SetAddressComponent', () => {
  let component: SetAddressComponent;
  let fixture: ComponentFixture<SetAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
