 import {}
 
 export const getJwtConfig = async (
    configService: ConfigService
 ): Promise<JwtModuleOptions> => ({
    secret: configService.get('JWT_SECRET')
 })