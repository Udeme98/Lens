// src/mail/mail.module.ts
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        // Use SendGrid's SMTP settings. Nodemailer supports API keys as passwords.
        transport: {
          host: 'smtp.sendgrid.net', // SendGrid SMTP host
          port: 587,                 // Standard TLS port
          secure: false,             // Use TLS, not SSL directly
          auth: {
            user: 'apikey', 
            pass: configService.get<string>('SENDGRID_API_KEY'), // Your SendGrid API Key
          },
        },
        defaults: {
      
          from: `"PhotoBooking" <${configService.get<string>('SENDGRID_VERIFIED_SENDER_EMAIL')}>`,
        },
        template: {
          dir: path.join(__dirname, 'templates'), // Path to your email templates
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService], // Inject ConfigService into the factory
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}