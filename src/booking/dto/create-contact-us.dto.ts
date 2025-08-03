import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateContactUsDto {
  @ApiProperty({
    description: 'Full name of the person contacting',
    example: 'John Doe'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @ApiProperty({
    description: 'Phone number (optional)',
    example: '+1234567890',
    required: false
  })
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  phone?: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.doe@example.com'
  })
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;

  @ApiProperty({
    description: 'Message or inquiry',
    example: 'I would like to know more about your photography services.'
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  message: string;
}
