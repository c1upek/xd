import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceHistoryDto } from '../models/service-history/service-history-dto.model';
import { ServiceHistory } from '../models/service-history/service-history.model';
import { DetailingHistoryService } from '../services/detailing-history.service';

@Component({
  selector: 'app-service-histories',
  templateUrl: './service-histories.component.html',
  styleUrls: ['./service-histories.component.scss'],
})
export class ServiceHistoriesComponent implements OnChanges {
  @Input() public carId!: string;

  public serviceHistories: ServiceHistory[] = [];

  constructor(private _detailingHistoryService: DetailingHistoryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['carId']){
      this.getServiceHistories(this.carId);
    }
  }

  private getServiceHistories(carId: string): void {
    this.serviceHistories = [];
    
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
