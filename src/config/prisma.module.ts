import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    imports: [PrismaService],
    controllers: [],
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}
