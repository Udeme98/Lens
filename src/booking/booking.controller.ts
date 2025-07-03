// src/booking/booking.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { MailService } from '../mail/mail.service';
import { Response } from 'express';

@Controller('booking')
export class BookingController {
  constructor(private readonly mailService: MailService) {}

  @Post('submit')
  @HttpCode(HttpStatus.OK)
  async submitBooking(
    @Body() createBookingDto: CreateBookingDto,
    @Res() res: Response
  ) {
    try {
      await this.mailService.sendBookingRequestEmail(createBookingDto);
      res.status(HttpStatus.OK).json({
        success: true,
        message: 'Your booking request has been sent successfully!',
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      res.status(error.getStatus ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message || 'An unexpected error occurred while processing your request.',
      });
    }
  }
}