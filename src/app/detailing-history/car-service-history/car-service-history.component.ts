import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car/car.model';
import { DetailingHistoryService } from '../services/detailing-history.service';

@Component({
  selector: 'app-car-service-history',
  templateUrl: './car-service-history.component.html',
  styleUrls: ['./car-service-history.component.scss'],
})
export class CarServiceHistoryComponent implements OnInit {
  public selectedCar: Car | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _detailingHistoryService: DetailingHistoryService
  ) {}

  ngOnInit(): void {
    this.getCar(this._route.snapshot.params['id']);
  }

  private getCar(carId: string): void {
    this._detailingHistoryService.getCar(carId).subscribe((result: any) => {
      this.selectedCar = new Car(result.data.car);
    });
  }
}
