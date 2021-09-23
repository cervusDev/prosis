import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createQuestionDto: CreateQuestionDto): import(".prisma/client").Prisma.Prisma__QuestionsClient<import(".prisma/client").Questions>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Questions[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__QuestionsClient<import(".prisma/client").Questions>;
    update(id: number, updateQuestionDto: UpdateQuestionDto): import(".prisma/client").Prisma.Prisma__QuestionsClient<import(".prisma/client").Questions>;
    remove(id: number): string;
}
