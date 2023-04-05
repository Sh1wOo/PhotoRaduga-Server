import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor (prisma: PrismaService)
}
