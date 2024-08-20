import { Injectable } from '@nestjs/common';  
import { PrismaService } from 'src/config/prisma.service';

@Injectable()  
export class TransactionService {  
  constructor(private prisma: PrismaService) {}  

  async getRecentTransactions(accountId: number) {  
    return this.prisma.transaction.findMany({  
      where: { accountId },  
      orderBy: { date: 'desc' },  
      take: 10  
    });  
  }  

  async generateMonthlyStatement(accountId: number) {  
    const now = new Date();  
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);  
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);  

    return this.prisma.transaction.findMany({  
      where: {  
        accountId,  
        date: { gte: firstDay, lte: lastDay }  
      }  
    });  
  }  
}