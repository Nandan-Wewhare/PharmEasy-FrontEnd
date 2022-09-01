import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosecardComponent } from './choosecard.component';

describe('ChoosecardComponent', () => {
  let component: ChoosecardComponent;
  let fixture: ComponentFixture<ChoosecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
