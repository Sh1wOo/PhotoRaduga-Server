import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService]
  imports: [
JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService]
})
  ]
})
export class AuthModule {}
