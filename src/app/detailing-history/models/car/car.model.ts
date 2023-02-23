import { CarDto } from './car-dto.model';

export class Car {
  public id!: string;
  public brand!: string;
  public model!: string;
  public fullName!: string;
  public registrationNumber!: string;
  public clientId!: string;
  public clientName!: string;

  constructor(dto: CarDto) {
    this.id = dto.id;
    this.brand = dto.brand;
    this.model = dto.model;
    this.fullName = `${dto.brand} ${dto.model}`;
    this.registrationNumber = dto.registrationNumber;
    this.clientId = dto.client.id;
    this.clientName = `${dto.client.firstname} ${dto.client.lastname}`;
  }
}
