import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohomeComponent } from './infohome.component';

describe('InfohomeComponent', () => {
  let component: InfohomeComponent;
  let fixture: ComponentFixture<InfohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfohomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
