// src/booking/booking.controller.ts
import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingService } from './booking.service';

@ApiTags('Bookings')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('submit')
  @ApiOperation({ summary: 'Submit booking request' })
  async submitBooking(@Body() createBookingDto: CreateBookingDto) {
    const result = await this.bookingService.submitBooking(createBookingDto);
    return {
      success: true,
      message: 'Booking request submitted successfully!',
      bookingId: result.bookingId,
    };
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all bookings' })
  async getAllBookings() {
    return this.bookingService.findAllBookings();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get booking by ID' })
  async getBookingById(@Param('id') id: string) {
    return this.bookingService.findBookingById(id);
  }
}