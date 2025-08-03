// src/mail/mail.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { CreateBookingDto } from '../booking/dto/create-booking.dto';
import { CreateContactUsDto } from '../booking/dto/create-contact-us.dto';
import { CreateContractDto } from '../invoice/dto/create-contract.dto';
import { CreateInvoiceDto } from '../invoice/dto/create-invoice.dto';

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
        subject: `New Photo Booking Request from ${bookingDetails.firstName} ${bookingDetails.lastName}`,
        template: 'booking-request', // Name of your Handlebars template file (without .hbs extension)
        context: {
          name: `${bookingDetails.firstName} ${bookingDetails.lastName}`,
          email: bookingDetails.email,
          phone: bookingDetails.phone || 'N/A',
          location: bookingDetails.location,
          eventDate: bookingDetails.eventDate,
          duration: bookingDetails.duration || 'Not specified',
          budget: bookingDetails.budget || 'Not specified',
          message: bookingDetails.message || 'No additional message',
          eventType: bookingDetails.eventType.map(type =>
            type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) // Format event types nicely
          ).join(', '), // Join array for display
          services: (bookingDetails.services || []).map(service =>
            service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) // Format services nicely
          ).join(', ') || 'Not specified', // Join array for display
        },
      });
      console.log('Booking request email sent successfully.');
    } catch (error) {
      console.error('Failed to send booking request email:', error.response || error.message);
      console.error('Full error details:', error);

      // Changed the error message to be more generic, as it's no longer SendGrid specific
      throw new InternalServerErrorException(
        `Failed to send booking request. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }

  async sendContactUsNotificationEmail(contactDetails: CreateContactUsDto): Promise<void> {
    // Send notification to app owner
    const recipient = this.configService.get<string>('RECIPIENT_EMAIL_2');

    if (!recipient) {
      throw new InternalServerErrorException('No recipient email configured for contact us notifications.');
    }

    try {
      await this.mailerService.sendMail({
        to: recipient,
        // The 'from' address MUST be your Gmail email address configured in GMAIL_SENDER_EMAIL.
        from: this.configService.get<string>('GMAIL_SENDER_EMAIL'),
        replyTo: contactDetails.email,
        subject: `New Contact Us Message from ${contactDetails.name}`,
        template: 'contact-us', // Name of your Handlebars template file (without .hbs extension)
        context: {
          name: contactDetails.name,
          email: contactDetails.email,
          phone: contactDetails.phone || 'Not provided',
          message: contactDetails.message,
        },
      });
      console.log('Contact us notification email sent successfully.');
    } catch (error) {
      console.error('Failed to send contact us notification email:', error.response || error.message);
      console.error('Full error details:', error);

      throw new InternalServerErrorException(
        `Failed to send contact us notification. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }

  async sendContractEmail(contractDetails: CreateContractDto, contractId: string): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: contractDetails.email,
        // The 'from' address MUST be your Gmail email address configured in GMAIL_SENDER_EMAIL.
        from: this.configService.get<string>('GMAIL_SENDER_EMAIL'),
        subject: `Photography Contract - ${contractDetails.fullName}`,
        template: 'contract', // Name of your Handlebars template file (without .hbs extension)
        context: {
          contractId,
          fullName: contractDetails.fullName,
          email: contractDetails.email,
          location: contractDetails.location,
          eventDate: contractDetails.eventDate ? new Date(contractDetails.eventDate).toLocaleDateString() : 'To be determined',
          duration: contractDetails.duration,
          totalFee: contractDetails.total_fee || 'To be determined',
          hourlyRate: contractDetails.hourly_rate || 'N/A',
          retainerPrice: contractDetails.retainer_price || 'N/A',
          duePrice: contractDetails.due_price || 'N/A',
          eventType: contractDetails.eventType.map(type =>
            type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) // Format event types nicely
          ).join(', '),
          services: contractDetails.services.map(service =>
            service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) // Format services nicely
          ).join(', '),
          message: contractDetails.message,
          currentDate: new Date().toLocaleDateString(),
        },
        attachments: [
          {
            filename: 'logo.jpg',
            path: require('path').join(__dirname, 'templates', 'image', '83687b9dfc79c1cf75037c1ba0fa229fd9f6d0b1.jpg'),
            cid: 'logo' // Content-ID for embedding in email template
          }
        ]
      });
      console.log('Contract email sent successfully to:', contractDetails.email);
    } catch (error) {
      console.error('Failed to send contract email:', error.response || error.message);
      console.error('Full error details:', error);

      throw new InternalServerErrorException(
        `Failed to send contract email. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }

  async sendInvoiceEmail(invoiceDetails: any, invoiceNumber: string): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: invoiceDetails.clientEmail,
        from: this.configService.get<string>('GMAIL_SENDER_EMAIL'),
        subject: `Invoice #${invoiceNumber} - Lens of Damiano Photography`,
        template: 'invoice',
        context: {
          invoiceNumber,
          clientName: invoiceDetails.clientName,
          clientEmail: invoiceDetails.clientEmail,
          clientPhone: invoiceDetails.clientPhone || '',
          clientAddress: invoiceDetails.clientAddress || '',
          phone: '+968 0988 98678',
          contactEmail: this.configService.get<string>('GMAIL_SENDER_EMAIL'),
          dueDate: invoiceDetails.dueDate ? new Date(invoiceDetails.dueDate).toLocaleDateString() : null,
          totalAmount: invoiceDetails.totalAmount,
          projectName: invoiceDetails.projectName || 'Photography Services',
          eventDate: invoiceDetails.eventDate ? new Date(invoiceDetails.eventDate).toLocaleDateString() : null,
          location: invoiceDetails.location || '',
          additionalServices: invoiceDetails.additionalServices || '',
          description: invoiceDetails.description || 'Photography Services',
          quantity: invoiceDetails.quantity || 1,
          rate: invoiceDetails.rate || invoiceDetails.totalAmount,
          amount: invoiceDetails.totalAmount,
          subtotal: invoiceDetails.subtotal || null,
          salesTax: invoiceDetails.salesTax || null,
          shippingHandling: invoiceDetails.shippingHandling || null,
          items: invoiceDetails.items || null,
        },
        attachments: [
          {
            filename: 'logo.jpg',
            path: require('path').join(__dirname, 'templates', 'image', '83687b9dfc79c1cf75037c1ba0fa229fd9f6d0b1.jpg'),
            cid: 'logo'
          }
        ]
      });
      console.log('Invoice email sent successfully to:', invoiceDetails.clientEmail);
    } catch (error) {
      console.error('Failed to send invoice email:', error.response || error.message);
      console.error('Full error details:', error);

      throw new InternalServerErrorException(
        `Failed to send invoice email. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }
}
