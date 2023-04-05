import { ConfigService } from '@nestJs/config'
import { JwtModuleOptions } from '@nestjs/jwt'
 
export const getJwtConfig = asyn c(
    configService: ConfigService
): Promise<JwtModuleOptions> => ({
    secret: configService.get('JWT_SECRET')
})