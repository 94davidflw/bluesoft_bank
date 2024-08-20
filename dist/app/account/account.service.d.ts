import { PrismaService } from 'src/config/prisma.service';
export declare class AccountService {
    private prisma;
    constructor(prisma: PrismaService);
    deposit(accountId: number, amount: number): Promise<{
        id: number;
        balance: number;
        accountType: string;
        customerId: number;
    }>;
    withdraw(accountId: number, amount: number): Promise<{
        id: number;
        balance: number;
        accountType: string;
        customerId: number;
    }>;
    getBalance(accountId: number): Promise<number>;
}
