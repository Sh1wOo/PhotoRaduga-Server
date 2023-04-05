export class AuthDto {
    @IsEmail()
    email: string
}