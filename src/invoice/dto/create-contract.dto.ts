import { IsString, IsEmail, IsNotEmpty, IsOptional, IsArray, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsValidEmailDomain } from '../../common/validators/email-domain.validator';

export class CreateContractDto {
  @ApiProperty({
    description: 'Full name of the client',
    example: 'John Doe'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  fullName: string;

  @ApiProperty({
    description: 'Email address of the client',
    example: 'john.doe@example.com'
  })
  @IsEmail({}, { message: 'Please enter a valid email address' })
  @IsValidEmailDomain({ message: 'Email domain appears to have a typo' })
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;

  @ApiProperty({
    description: 'Event location',
    example: 'Central Park, New York'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  location: string;

  @ApiProperty({
    description: 'Event date',
    example: '2025-08-15T10:00:00.000Z',
    required: false
  })
  @IsDateString()
  @IsOptional()
  eventDate?: string;

  @ApiProperty({
    description: 'Duration of the photography session',
    example: '3 hours'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  duration: string;

  @ApiProperty({
    description: 'Total fee for the service',
    example: 1500.00,
    required: false
  })
  @IsNumber()
  @IsOptional()
  total_fee?: number;

  @ApiProperty({
    description: 'Hourly rate',
    example: 150.00,
    required: false
  })
  @IsNumber()
  @IsOptional()
  hourly_rate?: number;

  @ApiProperty({
    description: 'Retainer price',
    example: 500.00,
    required: false
  })
  @IsNumber()
  @IsOptional()
  retainer_price?: number;

  @ApiProperty({
    description: 'Due price',
    example: 1000.00,
    required: false
  })
  @IsNumber()
  @IsOptional()
  due_price?: number;

  @ApiProperty({
    description: 'Types of events/photography',
    example: ['wedding', 'portrait'],
    isArray: true
  })
  @IsArray()
  @IsString({ each: true })
  eventType: string[];

  @ApiProperty({
    description: 'Services included',
    example: ['photo-editing', 'prints'],
    isArray: true
  })
  @IsArray()
  @IsString({ each: true })
  services: string[];

  @ApiProperty({
    description: 'Additional message or notes',
    example: 'Special requirements for outdoor shoot'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  message: string;
}
