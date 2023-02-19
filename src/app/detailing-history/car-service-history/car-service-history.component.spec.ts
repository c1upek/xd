import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceHistoryComponent } from './car-service-history.component';

describe('CarServiceHistoryComponent', () => {
  let component: CarServiceHistoryComponent;
  let fixture: ComponentFixture<CarServiceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarServiceHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarServiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
