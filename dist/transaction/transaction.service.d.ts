import { PrismaService } from 'src/config/prisma.service';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    getRecentTransactions(accountId: number): Promise<{
        id: number;
        amount: number;
        date: Date;
        type: string;
        location: string;
        accountId: number;
    }[]>;
    generateMonthlyStatement(accountId: number): Promise<{
        id: number;
        amount: number;
        date: Date;
        type: string;
        location: string;
        accountId: number;
    }[]>;
}
