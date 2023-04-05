 import { ConfigService } from '@nestJs/config'
 import { JwtModuleOptions } from '@nest'
 
 export const getJwtConfig = async (
    configService: ConfigService
 ): Promise<JwtModuleOptions> => ({
    secret: configService.get('JWT_SECRET')
 })