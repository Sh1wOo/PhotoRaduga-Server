import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './../.history/src/prisma.service_20230404164805';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { PaginationModule } from './pagination/pagination.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { StatisticsModule } from './statistics/statistics.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, ProductModule, ReviewModule, CategoryModule, OrderModule, StatisticsModule, PaginationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService ],
})
export class AppModule {}
