import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking, BookingStatus } from '@prisma/client';

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
        ...createBookingDto,
        status: BookingStatus.PENDING,
      },
    });

    // Send email notification
    await this.mailService.sendBookingRequestEmail(createBookingDto);

    return {
      booking,
      bookingId: booking.id,
    };
  }

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.prisma.booking.create({
      data: {
        ...createBookingDto,
        status: BookingStatus.PENDING,
      },
    });
  }

  async findAllBookings(): Promise<Booking[]> {
    return this.prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findBookingById(id: string): Promise<Booking> {
    const booking = await this.prisma.booking.findUnique({ where: { id } });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  async updateBookingStatus(id: string, status: BookingStatus): Promise<Booking> {
    await this.findBookingById(id); // Check if exists
    return this.prisma.booking.update({
      where: { id },
      data: { status },
    });
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

  async findBookingsByStatus(status: BookingStatus): Promise<Booking[]> {
    return this.prisma.booking.findMany({
      where: { status },
      orderBy: { createdAt: 'desc' },
    });
  }
}
