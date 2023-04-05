import { AuthDto } from './auth.dto';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async register(dto: AuthDto){
        const oldUser = await this.prisma.user
    }
}