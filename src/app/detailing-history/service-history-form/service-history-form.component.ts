import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto } from '../models/car/car-dto.model';
import { Car } from '../models/car/car.model';
import { ClientDto } from '../models/client/client-dto.model';
import { Client } from '../models/client/client.model';
import { DetailingHistoryService } from '../services/detailing-history.service';

@Component({
  selector: 'app-service-history-form',
  templateUrl: './service-history-form.component.html',
  styleUrls: ['./service-history-form.component.scss'],
})
export class ServiceHistoryFormComponent implements OnInit {
  public clients: Client[] = [];
  public filteredClients: Client[] = [];
  public selectedClient!: Client;

  public clientCars: Car[] = [];
  public filteredClientCars: Car[] = [];
  public selectedClientCar: Car | null = null;

  constructor(
    private _router: Router,
    private _detailingHistoryService: DetailingHistoryService
  ) {}

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
    this.resetClientCars();
    this.resetSelectedClientCar();
    this.selectedClient = client;

    this._detailingHistoryService
      .getClientCars(client.id)
      .subscribe((result: any) => {
        result.data.cars.forEach((carDto: CarDto) => {
          this.clientCars.push(new Car(carDto));
        });
        this.filteredClientCars = this.clientCars;
      });
  }

  public selectCar(car: Car): void {
    this.selectedClientCar = car;
  }

  public moveToCarHistory(): void {
    if (!this.selectedClientCar) {
      return;
    }

    this._router.navigateByUrl(
      `/service-histories/${this.selectedClientCar.id}`
    );
  }

  private resetClientCars() {
    this.clientCars = [];
  }

  private resetSelectedClientCar() {
    this.selectedClientCar = null;
  }
}
