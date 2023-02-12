import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoriesComponent } from './service-histories.component';

describe('ServiceHistoriesComponent', () => {
  let component: ServiceHistoriesComponent;
  let fixture: ComponentFixture<ServiceHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceHistoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
