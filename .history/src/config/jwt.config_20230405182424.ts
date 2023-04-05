 import { ConfigService } from '@nestJs/config'
 import { JwtModuleOptions } from '@nestjs/jwt'
 
 export const getJwtConfig = async (
    configService: ConfigS
 ): Promise<JwtModuleOptions> => ({
    secret: configService.get('JWT_SECRET')
 })