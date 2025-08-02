// src/mail/mail.module.ts
import { Module, forwardRef } from '@nestjs/common';
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
        transport: {
          host: 'smtp.gmail.com', // Gmail SMTP host
          port: 587,              // Standard TLS port for Gmail
          secure: false,          // Use TLS, not SSL directly (STARTTLS)
          auth: {
            user: configService.get<string>('GMAIL_USER'), // Your Gmail email address
            pass: configService.get<string>('GMAIL_APP_PASSWORD'), // Your App Password or regular password
          },
        },
        defaults: {
          from: `"PhotoBooking" <${configService.get<string>('GMAIL_SENDER_EMAIL')}>`, // Your sender email
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