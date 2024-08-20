import { ReportService } from './report.service';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    listCustomersByTransactionCount(month: string, year: string): Promise<Promise<{
        customer: {
            id: number;
            name: string;
            address: string;
        };
        transactionCount: number;
    }>[]>;
    listLargeExternalWithdraws(): Promise<{
        id: number;
        amount: number;
        date: Date;
        type: string;
        location: string;
        accountId: number;
    }[]>;
}
