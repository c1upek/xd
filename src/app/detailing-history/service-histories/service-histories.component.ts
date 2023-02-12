import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ServiceHistoryDto } from '../models/service-history/service-history-dto.model';
import { ServiceHistory } from '../models/service-history/service-history.model';

@Component({
  selector: 'app-service-histories',
  templateUrl: './service-histories.component.html',
  styleUrls: ['./service-histories.component.scss'],
})
export class ServiceHistoriesComponent implements OnInit {
  public serviceHistories: ServiceHistory[] = [];

  constructor(private _apollo: Apollo) {}

  ngOnInit(): void {
    this._apollo
      .watchQuery({
        query: gql`
          {
            serviceHistories(orderBy: publishedAt_DESC) {
              date
              id
              price
              description {
                html
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        result.data.serviceHistories.forEach(
          (serviceHistoryDto: ServiceHistoryDto) => {
            this.serviceHistories.push(new ServiceHistory(serviceHistoryDto));
          }
        );
      });
  }
}
