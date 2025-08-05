// src/booking/booking.controller.ts
import { Controller, Post, Body, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { BookingService } from './booking.service';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Bookings')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Public()
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
  @ApiOperation({ summary: 'Get all bookings with pagination' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' })
  async getAllBookings(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : undefined;
    const limitNum = limit ? parseInt(limit, 10) : undefined;
    
    return this.bookingService.findAllBookings(pageNum, limitNum);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get booking by ID' })
  async getBookingById(@Param('id') id: string) {
    return this.bookingService.findBookingById(id);
  }

  // Contact Us Endpoints
  @Public()
  @Post('contact-us')
  @ApiOperation({ summary: 'Submit contact us message' })
  async submitContactUs(@Body() createContactUsDto: CreateContactUsDto) {
    const result = await this.bookingService.createContactUs(createContactUsDto);
    return {
      success: true,
      message: 'Contact message submitted successfully!',
      contactId: result.contactId,
    };
  }

  @Get('contact-us/all')
  @ApiOperation({ summary: 'Get all contact us messages with pagination' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' })
  async getAllContactUs(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : undefined;
    const limitNum = limit ? parseInt(limit, 10) : undefined;
    
    return this.bookingService.findAllContactUs(pageNum, limitNum);
  }

  @Get('contact-us/count')
  @ApiOperation({ summary: 'Get total count of contact us messages' })
  async getContactUsCount() {
    return { count: await this.bookingService.getContactUsCount() };
  }
}