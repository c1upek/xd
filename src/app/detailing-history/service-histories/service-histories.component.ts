import { Component, Input, OnInit } from '@angular/core';
import { ServiceHistoryDto } from '../models/service-history/service-history-dto.model';
import { ServiceHistory } from '../models/service-history/service-history.model';
import { DetailingHistoryService } from '../services/detailing-history.service';

@Component({
  selector: 'app-service-histories',
  templateUrl: './service-histories.component.html',
  styleUrls: ['./service-histories.component.scss'],
})
export class ServiceHistoriesComponent implements OnInit {
  @Input() public carId!: string;

  public serviceHistories: ServiceHistory[] = [];

  constructor(private _detailingHistoryService: DetailingHistoryService) {}

  ngOnInit(): void {
    this.getServiceHistories(this.carId);
  }

  private getServiceHistories(carId: string): void {
    this._detailingHistoryService
      .getCarServiceHistories(carId)
      .subscribe((result: any) => {
        result.data.serviceHistories.forEach(
          (serviceHistoryDto: ServiceHistoryDto) => {
            this.serviceHistories.push(new ServiceHistory(serviceHistoryDto));
          }
        );
      });
  }
}
