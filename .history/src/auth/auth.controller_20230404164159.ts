import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
impo

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register() {
    return this.authService.register();
  }
}
