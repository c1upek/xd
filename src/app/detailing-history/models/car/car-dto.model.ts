import { ClientDto } from '../client/client-dto.model';

export class CarDto {
  public id!: string;
  public brand!: string;
  public model!: string;
  public registrationNumber!: string;
  public client!: ClientDto;
}
