import { ConfigService } from '@nestJs/config'
import { JwtModuleOptions } from '@nestjs/jwt'
 
export const getJwtConfig = async (
    configService: ConfigService
): Promise<JwtModuleOptions> => ({
    secret
})