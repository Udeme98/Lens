// src/booking/dto/create-booking.dto.ts
import { 
  IsString, 
  IsEmail, 
  IsArray, 
  IsNotEmpty, 
  ArrayMinSize, 
  IsOptional,
  IsDateString,
  IsISO8601
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsValidEmailDomain } from '../../common/validators/email-domain.validator';

export class CreateBookingDto {
  @ApiProperty({
    description: 'First name of the client',
    example: 'John'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  firstName: string;

  @ApiProperty({
    description: 'Last name of the client',
    example: 'Doe'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  lastName: string;

  @ApiProperty({
    description: 'Phone number of the client',
    example: '+1234567890',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ? value.trim() : value)
  phone?: string;

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
    description: 'Location of the event',
    example: 'Central Park, New York'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  location: string;

  @ApiProperty({
    description: 'Selected event date from calendar',
    example: '2025-07-12',
    required: false
  })
  @IsOptional()
  @IsDateString()
  eventDate?: string;

  @ApiProperty({
    description: 'Duration or time slot for the event',
    example: '2 hours',
    examples: {
      duration: { value: '2 hours', description: 'Duration format' },
      timeSlot: { value: '14:30-16:30', description: 'Time slot format' },
      minutes: { value: '120 minutes', description: 'Minutes format' }
    }
  })
  @IsString()
  @IsNotEmpty()
  duration: string;

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
    description: 'Selected photography event types',
    example: ['wedding-photography', 'portrait-session', 'family-photos'],
    type: [String]
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @IsNotEmpty({ each: true })
  @Transform(({ value }) => Array.isArray(value) ? value.map(item => item.trim()) : value)
  eventType: string[];

  @ApiProperty({
    description: 'Selected photography services',
    example: ['photo-editing', 'digital-gallery', 'printed-photos'],
    type: [String],
    required: false
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @Transform(({ value }) => Array.isArray(value) ? value.map(item => item.trim()) : value)
  services?: string[];

  @ApiProperty({
    description: 'Additional message or details from the client',
    example: 'Looking forward to working with you for our wedding photography.'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  message: string;
}