import { PrismaService } from 'src/config/prisma.service';
export declare class ReportService {
    private prisma;
    constructor(prisma: PrismaService);
    customersByTransactionCount(month: number, year: number): Promise<Promise<{
        customer: {
            id: number;
            name: string;
            address: string;
        };
        transactionCount: number;
    }>[]>;
    largeExternalWithdraws(): Promise<{
        id: number;
        amount: number;
        date: Date;
        type: string;
        location: string;
        accountId: number;
    }[]>;
}
