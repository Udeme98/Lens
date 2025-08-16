import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { CreateContractDto } from './dto/create-contract.dto';
import { MailService } from '../mail/mail.service';
import { Invoice, Contract } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoiceData: any = {
      ...createInvoiceDto,
      date: new Date(createInvoiceDto.date),
    };

    if (createInvoiceDto.dueDate) {
      invoiceData.dueDate = new Date(createInvoiceDto.dueDate);
    }

    return await this.prisma.$transaction(async (prisma) => {
      // Create invoice in database
      const invoice = await prisma.invoice.create({
        data: invoiceData,
      });

      // Send invoice email to client - if this fails, transaction will rollback
      await this.mailService.sendInvoiceEmail({
        clientName: invoice.clientName,
        clientEmail: invoice.email,
        clientPhone: invoice.phone || '',
        clientAddress: invoice.location,
        totalAmount: invoice.amount.toString(),
        dueDate: invoice.dueDate,
        projectName: invoice.description || 'Photography Services',
        eventDate: invoice.date,
        location: invoice.location,
        description: invoice.description || `${invoice.eventType} Photography - ${invoice.duration}`,
        quantity: 1,
        rate: invoice.amount.toString(),
      }, invoice.id);
      
      console.log(`Invoice email sent successfully for invoice ${invoice.id}`);
      return invoice;
    }, {
      maxWait: 15000, // Default maximum time to wait for a transaction slot (15s)
      timeout: 30000, // Maximum time the transaction can run (30s)
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

  // Contract Methods
  async createContract(createContractDto: CreateContractDto): Promise<{ contract: Contract; contractId: string }> {
    return await this.prisma.$transaction(async (prisma) => {
      // Create contract in database
      const contract = await prisma.contract.create({
        data: {
          fullName: createContractDto.fullName,
          email: createContractDto.email,
          location: createContractDto.location,
          eventDate: createContractDto.eventDate ? new Date(createContractDto.eventDate) : null,
          duration: createContractDto.duration,
          total_fee: createContractDto.total_fee,
          hourly_rate: createContractDto.hourly_rate,
          retainer_price: createContractDto.retainer_price,
          due_price: createContractDto.due_price,
          eventType: createContractDto.eventType,
          services: createContractDto.services,
          message: createContractDto.message,
        },
      });

      // Send contract copy to customer email - if this fails, transaction will rollback
      await this.mailService.sendContractEmail(createContractDto, contract.id);
      console.log(`Contract email sent successfully for contract ${contract.id}`);

      return {
        contract,
        contractId: contract.id,
      };
    }, {
      maxWait: 15000, // Default maximum time to wait for a transaction slot (15s)
      timeout: 30000, // Maximum time the transaction can run (30s)
    });
  }

  async findAllContracts(page?: number, limit?: number): Promise<{
    contracts: Contract[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    // Validate and set defaults in service
    const validPage = Math.max(1, page || 1);
    const validLimit = Math.min(Math.max(1, limit || 10), 100); // Max 100 items per page
    
    const skip = (validPage - 1) * validLimit;
    
    const [contracts, total] = await Promise.all([
      this.prisma.contract.findMany({
        skip,
        take: validLimit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.contract.count(),
    ]);

    const totalPages = Math.ceil(total / validLimit);

    return {
      contracts,
      total,
      page: validPage,
      limit: validLimit,
      totalPages,
    };
  }

  async getContractCount(): Promise<number> {
    return this.prisma.contract.count();
  }
}
