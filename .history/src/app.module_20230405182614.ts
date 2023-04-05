import { PrismaService } from './../.history/src/prisma.service_20230404164805';
import { ConfigMode }
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService ],
})
export class AppModule {}
