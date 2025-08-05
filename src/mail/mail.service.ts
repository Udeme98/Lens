// src/mail/mail.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { PdfService } from '../pdf/pdf.service';
import { CreateBookingDto } from '../booking/dto/create-booking.dto';
import { CreateContactUsDto } from '../booking/dto/create-contact-us.dto';
import { CreateContractDto } from '../invoice/dto/create-contract.dto';
import { CreateInvoiceDto } from '../invoice/dto/create-invoice.dto';
import { validateEmail } from './email-validator.util';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
    private readonly pdfService: PdfService,
  ) {}

  async sendBookingRequestEmail(bookingDetails: CreateBookingDto): Promise<void> {
    // This recipient email should still be configured in your .env, e.g., RECIPIENT_EMAIL_2
    const recipient = this.configService.get<string>('RECIPIENT_EMAIL_2');

    if (!recipient) {
      throw new InternalServerErrorException('No recipient emails configured for booking requests.');
    }

    // Validate customer email format before sending
    const emailValidation = validateEmail(bookingDetails.email);
    if (!emailValidation.isValid) {
      console.warn(`Invalid customer email in booking request: ${emailValidation.error}`);
    }

    try {
      await this.mailerService.sendMail({
        to: recipient,
        // The 'from' address MUST be your Gmail email address configured in GMAIL_SENDER_EMAIL.
        from: `"Lens by Damiano" <${this.configService.get<string>('GMAIL_SENDER_EMAIL')}>`,
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
      console.error('Booking details:', {
        customerEmail: bookingDetails.email,
        customerName: `${bookingDetails.firstName} ${bookingDetails.lastName}`
      });

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

    // Validate customer email format before sending
    const emailValidation = validateEmail(contactDetails.email);
    if (!emailValidation.isValid) {
      console.warn(`Invalid customer email in contact us: ${emailValidation.error}`);
    }

    try {
      await this.mailerService.sendMail({
        to: recipient,
        // The 'from' address MUST be your Gmail email address configured in GMAIL_SENDER_EMAIL.
        from: `"Lens by Damiano" <${this.configService.get<string>('GMAIL_SENDER_EMAIL')}>`,
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
      console.error('Contact details:', {
        customerEmail: contactDetails.email,
        customerName: contactDetails.name
      });

      throw new InternalServerErrorException(
        `Failed to send contact us notification. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }

  async sendContractEmail(contractDetails: CreateContractDto, contractId: string): Promise<void> {
    try {
      // Debug: Log the configuration and email details
      const senderEmail = this.configService.get<string>('GMAIL_SENDER_EMAIL');
      console.log('Gmail Configuration Debug:');
      console.log('- Sender Email:', senderEmail);
      console.log('- App Password configured:', !!this.configService.get<string>('GMAIL_APP_PASSWORD'));
      console.log('- Recipient Email:', contractDetails.email);
      
      // Validate email using utility function
      const emailValidation = validateEmail(contractDetails.email);
      if (!emailValidation.isValid) {
        console.warn(`Email validation failed: ${emailValidation.error}`);
        throw new Error(emailValidation.error);
      }

      // Prepare contract data for PDF generation
      const contractData = {
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
          type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        ).join(', '),
        services: contractDetails.services.map(service =>
          service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        ).join(', '),
        message: contractDetails.message,
        currentDate: new Date().toLocaleDateString(),
        contactEmail: this.configService.get<string>('GMAIL_SENDER_EMAIL'),
        phone: '+968 0988 98678',
      };

      // Generate PDF contract
      const pdfPath = await this.pdfService.generateContractPdf(contractData);
      
      await this.mailerService.sendMail({
        to: contractDetails.email,
        from: `"Lens by Damiano" <${senderEmail}>`,
        subject: `Photography Contract - ${contractDetails.fullName}`,
        template: 'contract',
        context: contractData,
        attachments: [
          {
            filename: 'logo.jpg',
            path: require('path').join(__dirname, 'templates', 'image', '83687b9dfc79c1cf75037c1ba0fa229fd9f6d0b1.jpg'),
            cid: 'logo'
          },
          {
            filename: `Contract-${contractId}.pdf`,
            path: pdfPath,
          }
        ]
      });
      console.log('Contract email with PDF sent successfully to:', contractDetails.email);
    } catch (error) {
      console.error('Failed to send contract email:', error.response || error.message);
      console.error('Full error details:', error);
      console.error('Contract details:', {
        contractId,
        recipientEmail: contractDetails.email,
        fullName: contractDetails.fullName
      });

      throw new InternalServerErrorException(
        `Failed to send contract email. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }

  async sendInvoiceEmail(invoiceDetails: any, invoiceNumber: string): Promise<void> {
    try {
      // Validate client email format before sending
      const emailValidation = validateEmail(invoiceDetails.clientEmail);
      if (!emailValidation.isValid) {
        console.warn(`Invalid client email in invoice: ${emailValidation.error}`);
      }

      // Prepare invoice data for PDF generation
      const invoiceData = {
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
      };

      // Generate PDF invoice
      const pdfPath = await this.pdfService.generateInvoicePdf(invoiceData);

      await this.mailerService.sendMail({
        to: invoiceDetails.clientEmail,
        from: `"Lens by Damiano" <${this.configService.get<string>('GMAIL_SENDER_EMAIL')}>`,
        subject: `Invoice #${invoiceNumber} - Lens by Damiano Photography`,
        template: 'invoice',
        context: invoiceData,
        attachments: [
          {
            filename: 'logo.jpg',
            path: require('path').join(__dirname, 'templates', 'image', '83687b9dfc79c1cf75037c1ba0fa229fd9f6d0b1.jpg'),
            cid: 'logo'
          },
          {
            filename: `Invoice-${invoiceNumber}.pdf`,
            path: pdfPath,
          }
        ]
      });
      console.log('Invoice email with PDF sent successfully to:', invoiceDetails.clientEmail);
    } catch (error) {
      console.error('Failed to send invoice email:', error.response || error.message);
      console.error('Full error details:', error);
      console.error('Invoice details:', {
        invoiceNumber,
        clientEmail: invoiceDetails.clientEmail,
        clientName: invoiceDetails.clientName
      });

      throw new InternalServerErrorException(
        `Failed to send invoice email. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }

  async sendPasswordResetEmail(resetData: { firstName: string; resetToken: string; email: string }): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: resetData.email,
        from: `"Lens by Damiano" <${this.configService.get<string>('GMAIL_SENDER_EMAIL')}>`,
        subject: 'Password Reset Request - Lens by Damiano',
        template: 'password-reset',
        context: {
          firstName: resetData.firstName,
          resetToken: resetData.resetToken,
          email: resetData.email,
        },
      });
      console.log('Password reset email sent successfully to:', resetData.email);
    } catch (error) {
      console.error('Failed to send password reset email:', error.response || error.message);
      console.error('Full error details:', error);
      console.error('Reset data:', {
        email: resetData.email,
        firstName: resetData.firstName
      });

      throw new InternalServerErrorException(
        `Failed to send password reset email. Email error: ${error.message || 'Unknown email service error'}`
      );
    }
  }
}
