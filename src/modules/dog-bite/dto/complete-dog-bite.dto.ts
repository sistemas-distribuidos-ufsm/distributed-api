import { ApiProperty } from '@nestjs/swagger';

const isRequired = { required: true };
const isOptional = { required: false };

export class CompleteDogBiteDto {
  @ApiProperty(isRequired)
  id: number;

  @ApiProperty(isRequired)
  dateOfBite: Date;

  @ApiProperty(isOptional)
  breed: string;

  @ApiProperty(isOptional)
  age: string;

  @ApiProperty(isRequired)
  gender: string;

  @ApiProperty(isOptional)
  isSpayed: boolean;

  @ApiProperty(isRequired)
  borough: string;

  @ApiProperty(isOptional)
  zipCode: string;
}
