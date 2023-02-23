import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-service-history',
  templateUrl: './car-service-history.component.html',
  styleUrls: ['./car-service-history.component.scss'],
})
export class CarServiceHistoryComponent implements OnInit {
  public carId!: string;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    console.log('car-service-history', id);

    this._route.params.subscribe((params: Params) => {
      id = +params['id'];
      console.log('hotel' + id);
    });
  }
}
