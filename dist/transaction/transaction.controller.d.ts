import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getRecentTransactions(id: string): Promise<{
        id: number;
        amount: number;
        date: Date;
        type: string;
        location: string;
        accountId: number;
    }[]>;
    generateMonthlyStatement(id: string): Promise<{
        id: number;
        amount: number;
        date: Date;
        type: string;
        location: string;
        accountId: number;
    }[]>;
}
