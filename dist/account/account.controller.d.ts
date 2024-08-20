import { AccountService } from './account.service';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    deposit(id: string, amount: string): Promise<{
        id: number;
        balance: number;
        accountType: string;
        customerId: number;
    }>;
    withdraw(id: string, amount: string): Promise<{
        id: number;
        balance: number;
        accountType: string;
        customerId: number;
    }>;
    getBalance(id: string): Promise<number>;
}
