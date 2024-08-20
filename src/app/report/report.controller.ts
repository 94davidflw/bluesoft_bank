import { Controller, Get, Query } from '@nestjs/common';  
import { ReportService } from './report.service';  

@Controller('reports')  
export class ReportController {  
  constructor(private readonly reportService: ReportService) {}  

  @Get('transaction-count')  
  async listCustomersByTransactionCount(  
    @Query('month') month: string,  
    @Query('year') year: string  
  ) {  
    return this.reportService.customersByTransactionCount(Number(month), Number(year));  
  }  

  @Get('large-external-withdraws')  
  async listLargeExternalWithdraws() {  
    return this.reportService.largeExternalWithdraws();  
  }  
}