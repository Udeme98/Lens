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
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { CreateContractDto } from './dto/create-contract.dto';

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

  // Contract Endpoints
  @Post('contracts')
  @ApiOperation({ summary: 'Create contract and send to client' })
  async createContract(@Body() createContractDto: CreateContractDto) {
    const result = await this.invoiceService.createContract(createContractDto);
    return {
      success: true,
      message: 'Contract created and sent to client successfully!',
      contractId: result.contractId,
    };
  }

  @Get('contracts/all')
  @ApiOperation({ summary: 'Get all contracts with pagination' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' })
  async getAllContracts(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : undefined;
    const limitNum = limit ? parseInt(limit, 10) : undefined;
    
    return this.invoiceService.findAllContracts(pageNum, limitNum);
  }

  @Get('contracts/count')
  @ApiOperation({ summary: 'Get total count of contracts' })
  async getContractCount() {
    return { count: await this.invoiceService.getContractCount() };
  }
}
