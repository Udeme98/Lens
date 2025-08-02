import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice, InvoiceStatus } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    return this.prisma.invoice.create({
      data: {
        ...createInvoiceDto,
        date: new Date(createInvoiceDto.date),
        status: InvoiceStatus.DRAFT,
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

  async findByStatus(status: InvoiceStatus): Promise<Invoice[]> {
    return this.prisma.invoice.findMany({
      where: { status },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByEmail(email: string): Promise<Invoice[]> {
    return this.prisma.invoice.findMany({
      where: { email },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStatus(id: string, status: InvoiceStatus): Promise<Invoice> {
    await this.findOne(id); // Check if exists
    return this.prisma.invoice.update({
      where: { id },
      data: { status },
    });
  }

  async getStatistics() {
    const [total, draft, sent, paid, cancelled, overdue] = await Promise.all([
      this.prisma.invoice.count(),
      this.prisma.invoice.count({ where: { status: InvoiceStatus.DRAFT } }),
      this.prisma.invoice.count({ where: { status: InvoiceStatus.SENT } }),
      this.prisma.invoice.count({ where: { status: InvoiceStatus.PAID } }),
      this.prisma.invoice.count({ where: { status: InvoiceStatus.CANCELLED } }),
      this.prisma.invoice.count({ where: { status: InvoiceStatus.OVERDUE } }),
    ]);

    return {
      total,
      byStatus: { draft, sent, paid, cancelled, overdue },
    };
  }
}
