// src/booking/dto/create-booking.dto.ts
import { 
  IsString, 
  IsEmail, 
  IsArray, 
  IsNotEmpty, 
  ArrayMinSize, 
  IsOptional 
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({
    description: 'Full name of the client',
    example: 'John Doe'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @ApiProperty({
    description: 'Phone number of the client',
    example: '+1234567890',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ? value.trim() : value)
  phone: string;

  @ApiProperty({
    description: 'Email address of the client',
    example: 'john.doe@example.com'
  })
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  email: string;

  @ApiProperty({
    description: 'Location of the event',
    example: 'Central Park, New York'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  location: string;

  @ApiProperty({
    description: 'Proposed date for the event',
    example: '2025-08-15'
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  proposedDate: string;

  @ApiProperty({
    description: 'Budget for the photography service',
    example: '$1500',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ? value.trim() : value)
  budget?: string;

  @ApiProperty({
    description: 'How the client heard about the service',
    example: 'Instagram',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ? value.trim() : value)
  hearAbout?: string;

  @ApiProperty({
    description: 'Types of photography events',
    example: ['wedding', 'portrait'],
    type: [String]
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @IsNotEmpty({ each: true })
  @Transform(({ value }) => Array.isArray(value) ? value.map(item => item.trim()) : value)
  eventType: string[];

  @ApiProperty({
    description: 'Additional message or details from the client',
    example: 'Looking forward to working with you for our wedding photography.'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  message: string;
}