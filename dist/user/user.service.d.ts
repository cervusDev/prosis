import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        password: any;
        id: number;
        username: string;
        email: string;
    }>;
    findAll(): string;
    findById(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findByEmail(email: string): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
