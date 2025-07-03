// src/booking/dto/create-booking.dto.ts
import { IsString, IsEmail, IsArray, IsNotEmpty, ArrayMinSize, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ? value.trim() : value)
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  email: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  location: string;

  @IsString()
  @IsNotEmpty()
  proposedDate: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ? value.trim() : value)
  budget?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value ? value.trim() : value)
  hearAbout?: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @IsNotEmpty({ each: true })
  @Transform(({ value }) => Array.isArray(value) ? value.map(item => item.trim()) : value)
  eventType: string[];

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  message: string;
}