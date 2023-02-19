import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoryFormComponent } from './service-history-form.component';

describe('ServiceHistoryFormComponent', () => {
  let component: ServiceHistoryFormComponent;
  let fixture: ComponentFixture<ServiceHistoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHistoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
