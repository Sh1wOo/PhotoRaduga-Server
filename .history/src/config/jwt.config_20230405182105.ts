 import { ConfigService } from '@nestJs/config'
 import { JwtModuleOp }
 
 export const getJwtConfig = async (
    configService: ConfigService
 ): Promise<JwtModuleOptions> => ({
    secret: configService.get('JWT_SECRET')
 })