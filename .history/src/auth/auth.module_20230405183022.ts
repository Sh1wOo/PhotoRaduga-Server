import { ConfigModule } from '@nesr';
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService]
  imports: [
JwtModule.registerAsync({
  imports: [ConfigModule]
})
  ]
})
export class AuthModule {}
