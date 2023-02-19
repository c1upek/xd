import { ServiceHistoryDto } from './service-history-dto.model';

export class ServiceHistory {
  public id!: string;
  public date!: Date;
  public price!: number;
  public description!: string;
  public carId!: string;

  constructor(dto: ServiceHistoryDto) {
    this.id = dto.id;
    this.date = dto.date;
    this.price = dto.price;
    this.description = dto.description.html;
    this.carId = dto.car.id;
  }
}
