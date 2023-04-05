export class AuthDto {
    @IsEmail()
    email: string

    @MinLength(6, {
        
    })
}