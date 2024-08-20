import { Injectable } from '@nestjs/common';  
import { PrismaService } from 'src/config/prisma.service';
// import { PrismaService } from '../prisma.service';  

@Injectable()  
export class AccountService {  
  constructor( private prisma: PrismaService ) {}  

  async deposit(accountId: number, amount: number) {  
    return this.prisma.account.update({  
      where: { id: accountId },  
      data: { balance: { increment: amount } },  
    });  
  }  

  async withdraw(accountId: number, amount: number) {  
    const account = await this.prisma.account.findUnique({ where: { id: accountId } });  
    if (account.balance < amount) throw new Error('Insufficient Balance');  
    
    return this.prisma.account.update({  
      where: { id: accountId },  
      data: { balance: { decrement: amount } },  
    });  
  }  

  async getBalance(accountId: number) {  
    const account = await this.prisma.account.findUnique({ where: { id: accountId } });  
    return account.balance;  
  }  
}