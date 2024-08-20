import { Injectable } from '@nestjs/common';  
import { PrismaService } from 'src/config/prisma.service';

@Injectable()  
export class ReportService {  
  constructor(private prisma: PrismaService) {}  

  async customersByTransactionCount(month: number, year: number) {  
    const transactions = await this.prisma.transaction.groupBy({  
      by: ['accountId'],  
      where: {   
        date: {   
          gte: new Date(year, month - 1, 1),  
          lt: new Date(year, month, 1)  
        }  
      },  
      _count: { accountId: true },  
      orderBy: { _count: { accountId: 'desc' } }  
    });  

    return transactions.map(async ({ accountId, _count }) => ({  
      customer: await this.prisma.customer.findFirst({  
        where: { accounts: { some: { id: accountId } } }  
      }),  
      transactionCount: _count.accountId  
    }));  
  }  

  async largeExternalWithdraws() {  
    return this.prisma.transaction.findMany({  
      where: {  
        type: 'withdrawal',  
        location: { not: '' }, // Add logic for locations if needed  
        amount: { gt: 1000000 }  
      }  
    });  
  }  
}