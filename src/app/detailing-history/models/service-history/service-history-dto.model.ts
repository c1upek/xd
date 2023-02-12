import { RichText } from "src/common/models/rich-text.model";

export class ServiceHistoryDto {
  public id!: string;
  public date!: Date;
  public price!: number;
  public description!: RichText;
}
