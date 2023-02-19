import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CarDto } from '../models/car/car-dto.model';
import { Car } from '../models/car/car.model';
import { ClientDto } from '../models/client/client-dto.model';
import { Client } from '../models/client/client.model';
import { ServiceHistoryDto } from '../models/service-history/service-history-dto.model';
import { ServiceHistory } from '../models/service-history/service-history.model';
import { DetailingHistoryService } from '../services/detailing-history.service';

@Component({
  selector: 'app-service-histories',
  templateUrl: './service-histories.component.html',
  styleUrls: ['./service-histories.component.scss'],
})
export class ServiceHistoriesComponent implements OnInit {
  public clients: Client[] = [];
  public filteredClients: Client[] = [];
  public selectedClient!: Client;
  
  public clientCars: Car[] = [];
  public filteredClientCars: Car[] = [];
  public selectedClientCar!: Car;

  public serviceHistories: ServiceHistory[] = [];

  constructor(private _detailingHistoryService: DetailingHistoryService) {}

  ngOnInit(): void {
    this._detailingHistoryService.getClients().subscribe((result: any) => {
      result.data.clients.forEach((clientDto: ClientDto) => {
        this.clients.push(new Client(clientDto));
      });
      this.filteredClients = this.clients;
    });
  }

  public filterClients(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredClients = this.clients.filter(
      (client) => client.name.toLowerCase().indexOf(query) === 0
    );
  }

  public filterCars(event: any): void {
    const query = event.query.toLowerCase();
    this.filteredClientCars = this.clientCars.filter(
      (car) => car.fullName.toLowerCase().indexOf(query) === 0
    );
  }

  public selectClient(client: Client): void {
    this.selectedClient = client;

    this._detailingHistoryService.getClientCars(client.id).subscribe((result: any) => {
      result.data.cars.forEach((carDto: CarDto) => {
        this.clientCars.push(new Car(carDto));
      });
    this.filteredClientCars = this.clientCars;
    });
  }

  public selectCar(car: Car): void {
    this.selectedClientCar = car;

    this._detailingHistoryService
      .getCarServiceHistories(car.id)
      .subscribe((result: any) => {
        result.data.serviceHistories.forEach(
          (serviceHistoryDto: ServiceHistoryDto) => {
            this.serviceHistories.push(new ServiceHistory(serviceHistoryDto));
          }
        );
      });
  }
}
