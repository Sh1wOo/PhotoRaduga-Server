import { AuthDto } from './dto/auth.dto';
import { PrismaService } from './../prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { hash } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    async getNewTokens(refreshToken: string){
        const result = await this.jwt.verifyAsync(refreshToken)
        if(result) new Un
    }

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
                avatarPath: faker.image.avatar(),
                phone: faker.phone.number('+375 (##) ###-##-##'),
                password: await hash(dto.password)
            }
        })

        const tokens = await this.issueTokens(user.id)

        return {
            user: this.returnUserFields(user),
            ...tokens 
        }
    }

    private async issueTokens(userId: number){
        const data = {id: userId}

        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h',
        })

        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d'
        })

        return { accessToken, refreshToken }
    }

    private returnUserFields(user: User){
        return {
            id: user.id,
            email: user.email,
        }
    }
}
