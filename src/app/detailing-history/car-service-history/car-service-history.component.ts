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
  public isQrcodeVisible: boolean = false;

  public selectedCar: Car | undefined;
  public url!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _detailingHistoryService: DetailingHistoryService
  ) {}

  ngOnInit(): void {
    this.getCar(this._activatedRoute.snapshot.params['id']);
    this.url = window.location.href;
  }

  public toggleQrcodeVisibility() {
    this.isQrcodeVisible = !this.isQrcodeVisible;
  }

  private getCar(carId: string): void {
    this._detailingHistoryService.getCar(carId).subscribe((result: any) => {
      this.selectedCar = new Car(result.data.car);
    });
  }
}
