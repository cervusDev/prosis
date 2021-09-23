import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserToken } from './model/UserToken';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    login(email: string, password: string): Promise<UserToken>;
    private validateUser;
}
