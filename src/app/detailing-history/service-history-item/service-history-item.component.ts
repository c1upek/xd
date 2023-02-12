import { Component, Input, OnInit } from '@angular/core';
import { ServiceHistory } from '../models/service-history/service-history.model';

@Component({
  selector: 'app-service-history-item',
  templateUrl: './service-history-item.component.html',
  styleUrls: ['./service-history-item.component.scss'],
})
export class ServiceHistoryItemComponent implements OnInit {
  @Input() serviceHistory!: ServiceHistory;

  constructor() {}

  ngOnInit(): void {}
}
