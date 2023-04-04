import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  Htt
  @Post('register')
  async register() {
    return this.authService.register();
  }
}
