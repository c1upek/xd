import { RichText } from 'src/common/models/rich-text.model';
import { CarDto } from '../car/car-dto.model';

export class ServiceHistoryDto {
  public id!: string;
  public date!: Date;
  public price!: number;
  public description!: RichText;
  public car!: CarDto;
}
