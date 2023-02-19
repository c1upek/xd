import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailingHistoryComponent } from './detailing-history.component';

describe('DetailingHistoryComponent', () => {
  let component: DetailingHistoryComponent;
  let fixture: ComponentFixture<DetailingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
