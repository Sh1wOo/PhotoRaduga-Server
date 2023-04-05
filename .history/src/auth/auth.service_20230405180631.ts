import { AuthDto } from './auth.dto';
import { PrismaService } from './../prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async register(dto: AuthDto){
        const oldUser = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })

        if (oldUser) throw new BadRequestException('User already exists')

        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                name: faker.name.firstName(),
                avatarPath: faker

            }
        })
    }
}