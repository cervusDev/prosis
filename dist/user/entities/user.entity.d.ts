import { Prisma } from '.prisma/client';
export declare class User implements Prisma.UserUncheckedCreateInput {
    id?: number;
    username: string;
    email: string;
    password: string;
}
