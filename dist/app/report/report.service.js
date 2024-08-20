"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/prisma.service");
let ReportService = class ReportService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async customersByTransactionCount(month, year) {
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
                location: { not: '' },
                amount: { gt: 1000000 }
            }
        });
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportService);
//# sourceMappingURL=report.service.js.map