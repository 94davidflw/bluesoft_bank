import { Controller, Get, Param } from '@nestjs/common';  
import { TransactionService } from './transaction.service';  

@Controller('transactions')  
export class TransactionController {  
  constructor(private readonly transactionService: TransactionService) {}  

  @Get(':id/recent')  
  async getRecentTransactions(@Param('id') id: string) {  
    return this.transactionService.getRecentTransactions(Number(id));  
  }  

  @Get(':id/statement')  
  async generateMonthlyStatement(@Param('id') id: string) {  
    return this.transactionService.generateMonthlyStatement(Number(id));  
  }  
}