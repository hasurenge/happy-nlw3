import { IsString, IsBoolean, IsDecimal, MaxLength } from 'class-validator';

export class CreateOrphanageDto {
  @IsString()
  name: string;

  @IsDecimal()
  latitude: number;

  @IsDecimal()
  longitude: number;

  @IsString()
  @MaxLength(300)
  about: string;

  @IsString()
  instructions: string;

  @IsString()
  opening_hours: string;

  @IsBoolean()
  open_at_weekends: boolean;
}
