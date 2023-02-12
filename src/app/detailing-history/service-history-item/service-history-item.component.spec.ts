import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoryItemComponent } from './service-history-item.component';

describe('ServiceHistoryItemComponent', () => {
  let component: ServiceHistoryItemComponent;
  let fixture: ComponentFixture<ServiceHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceHistoryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
