import { ClientDto } from './client-dto.model';

export class Client {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public name!: string;

  constructor(dto: ClientDto) {
    this.id = dto.id;
    this.firstName = dto.firstname;
    this.lastName = dto.lastname;
    this.name = `${dto.firstname} ${dto.lastname}`;
  }
}
