import { AuthDto } from './../../.history/src/auth/auth.dto_20230405174832';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async register(dto: AuthDto)
}
