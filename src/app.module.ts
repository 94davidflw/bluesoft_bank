import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './app/account/account.module';
import { TransactionModule } from './app/transaction/transaction.module';
import { ReportModule } from './app/report/report.module';

@Module({
  imports: [AccountModule, TransactionModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
