import { IsString, IsEmail, IsNotEmpty, IsDecimal, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateInvoiceDto {
  @ApiProperty({
    description: 'Client name',
    example: 'John Doe'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  clientName: string;

  @ApiProperty({
    description: 'Client email address',
    example: 'client@example.com'
  })
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  email: string;

  @ApiProperty({
    description: 'Client phone number',
    example: '+1234567890',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  phone?: string;

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

  @ApiProperty({
    description: 'Description of services provided',
    example: 'Wedding photography with reception coverage',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  description?: string;

  @ApiProperty({
    description: 'Due date for payment',
    example: '2025-09-15T10:00:00Z',
    required: false
  })
  @IsDateString()
  @IsOptional()
  dueDate?: string;
}
