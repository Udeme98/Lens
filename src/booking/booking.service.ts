import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from '@prisma/client';

@Injectable()
export class BookingService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => MailService))
    private readonly mailService: MailService,
  ) {}

  async submitBooking(createBookingDto: CreateBookingDto): Promise<{ booking: Booking; bookingId: string }> {
    // Create booking in database
    const booking = await this.prisma.booking.create({
      data: {
        firstName: createBookingDto.firstName,
        lastName: createBookingDto.lastName,
        phone: createBookingDto.phone,
        email: createBookingDto.email,
        location: createBookingDto.location,
        eventDate: createBookingDto.eventDate ? new Date(createBookingDto.eventDate) : null,
        duration: createBookingDto.duration, // Store as string (e.g., "14:30", "2h", "120 minutes")
        budget: createBookingDto.budget,
        eventType: createBookingDto.eventType,
        services: createBookingDto.services || [],
        message: createBookingDto.message,
      },
    });

    // Send email notification
    await this.mailService.sendBookingRequestEmail(createBookingDto);

    return {
      booking,
      bookingId: booking.id,
    };
  }

  async findAllBookings(page?: number, limit?: number): Promise<{
    bookings: Booking[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    // Validate and set defaults in service
    const validPage = Math.max(1, page || 1);
    const validLimit = Math.min(Math.max(1, limit || 10), 100); // Max 100 items per page
    
    const skip = (validPage - 1) * validLimit;
    
    const [bookings, total] = await Promise.all([
      this.prisma.booking.findMany({
        skip,
        take: validLimit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.booking.count(),
    ]);

    const totalPages = Math.ceil(total / validLimit);

    return {
      bookings,
      total,
      page: validPage,
      limit: validLimit,
      totalPages,
    };
  }

  async findBookingById(id: string): Promise<Booking> {
    const booking = await this.prisma.booking.findUnique({ where: { id } });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  async deleteBooking(id: string): Promise<Booking> {
    await this.findBookingById(id); // Check if exists
    return this.prisma.booking.delete({ where: { id } });
  }

  async findBookingsByEmail(email: string): Promise<Booking[]> {
    return this.prisma.booking.findMany({
      where: { email },
      orderBy: { createdAt: 'desc' },
    });
  }
}
