import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @ApiOperation({ summary: 'Create invoice' })
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all invoices' })
  async findAll(@Query('email') email?: string) {
    if (email) return this.invoiceService.findByEmail(email);
    return this.invoiceService.findAll();
  }

  @Get('count')
  @ApiOperation({ summary: 'Get invoice count' })
  async getCount() {
    return { count: await this.invoiceService.getCount() };
  }

  @Get('statistics')
  @ApiOperation({ summary: 'Get invoice statistics' })
  async getStatistics() {
    return this.invoiceService.getStatistics();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get invoice by ID' })
  async findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update invoice' })
  async update(
    @Param('id') id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ) {
    return this.invoiceService.update(id, updateInvoiceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete invoice' })
  async remove(@Param('id') id: string) {
    return this.invoiceService.remove(id);
  }
}
