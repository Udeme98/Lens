// src/mail/mail.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { CreateBookingDto } from '../booking/dto/create-booking.dto';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendBookingRequestEmail(bookingDetails: CreateBookingDto): Promise<void> {
    // This recipient email should still be configured in your .env, e.g., RECIPIENT_EMAIL_2
    const recipient = this.configService.get<string>('RECIPIENT_EMAIL_2');

    if (!recipient) {
      throw new InternalServerErrorException('No recipient emails configured for booking requests.');
    }

    try {
      await this.mailerService.sendMail({
        to: recipient,
        // The 'from' address MUST be your Gmail email address configured in GMAIL_SENDER_EMAIL.
        from: this.configService.get<string>('GMAIL_SENDER_EMAIL'),
        replyTo: bookingDetails.email,
        subject: `New Photo Booking Request from ${bookingDetails.name}`,
        template: 'booking-request', // Name of your Handlebars template file (without .hbs extension)
        context: {
          name: bookingDetails.name,
          email: bookingDetails.email,
          phone: bookingDetails.phone || 'N/A',
          location: bookingDetails.location,
          proposedDate: bookingDetails.proposedDate,
          budget: bookingDetails.budget || 'Not specified',
          hearAbout: bookingDetails.hearAbout || 'Not specified',
          eventType: bookingDetails.eventType.map(type =>
            type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) // Format event types nicely
          ).join(', '), // Join array for display
          message: bookingDetails.message,
        },
      });
      console.log('Booking request email sent successfully.');
    } catch (error) {
      console.error('Failed to send booking request email:', error.response || error.message);

      // Changed the error message to be more generic, as it's no longer SendGrid specific
      throw new InternalServerErrorException(
        'Failed to send booking request. Please check email service credentials and configuration.'
      );
    }
  }
}
