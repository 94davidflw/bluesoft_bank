import { Controller, Get, Param, Patch, Query } from '@nestjs/common';  
import { AccountService } from './account.service';  

@Controller('accounts')  
export class AccountController {  
  constructor(private readonly accountService: AccountService) {}  

  @Patch(':id/deposit')  
  async deposit(@Param('id') id: string, @Query('amount') amount: string) {  
    return this.accountService.deposit(Number(id), parseFloat(amount));  
  }  

  @Patch(':id/withdraw')  
  async withdraw(@Param('id') id: string, @Query('amount') amount: string) {  
    return this.accountService.withdraw(Number(id), parseFloat(amount));  
  }  

  @Get(':id/balance')  
  async getBalance(@Param('id') id: string) {  
    return this.accountService.getBalance(Number(id));  
  }  
}