import { AuthService } from './auth.service';
import { LoginRequestBody } from './model/LoginRequestBody';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password }: LoginRequestBody): Promise<import("./model/UserToken").UserToken>;
}
