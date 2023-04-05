import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class  JwtStrategy extends PassportStrategy(Strategy)
{
    constructor(
        private readonly configService: ConfigService,
        private prisma: PrismaService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuth>headerAs
        })
    }
}