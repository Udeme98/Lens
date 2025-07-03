import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [BookingController],
})
export class BookingModule {}