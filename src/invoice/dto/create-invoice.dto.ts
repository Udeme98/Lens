import { IsString, IsEmail, IsNotEmpty, IsDecimal, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateInvoiceDto {
  @ApiProperty({
    description: 'Client email address',
    example: 'client@example.com'
  })
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  email: string;

  @ApiProperty({
    description: 'Type of event for the invoice',
    example: 'Wedding Photography'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  eventType: string;

  @ApiProperty({
    description: 'Invoice amount',
    example: 1500.00,
    type: 'number'
  })
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'Duration of the event or service',
    example: '4 hours'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  duration: string;

  @ApiProperty({
    description: 'Date of the event',
    example: '2025-08-15T10:00:00Z'
  })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({
    description: 'Location of the event',
    example: 'Central Park, New York'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  location: string;
}
