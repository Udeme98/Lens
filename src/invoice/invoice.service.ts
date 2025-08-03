import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    return this.prisma.invoice.create({
      data: {
        ...createInvoiceDto,
        date: new Date(createInvoiceDto.date),
      },
    });
  }

  async findAll(): Promise<Invoice[]> {
    return this.prisma.invoice.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<Invoice> {
    const invoice = await this.prisma.invoice.findUnique({ where: { id } });
    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
    return invoice;
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
    await this.findOne(id); // Check if exists

    const updateData: any = { ...updateInvoiceDto };
    if (updateInvoiceDto.date) {
      updateData.date = new Date(updateInvoiceDto.date);
    }

    return this.prisma.invoice.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: string): Promise<Invoice> {
    await this.findOne(id); // Check if exists
    return this.prisma.invoice.delete({ where: { id } });
  }

  async getCount(): Promise<number> {
    return this.prisma.invoice.count();
  }

  async findByEmail(email: string): Promise<Invoice[]> {
    return this.prisma.invoice.findMany({
      where: { email },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getStatistics() {
    const total = await this.prisma.invoice.count();
    
    return {
      total,
    };
  }
}
