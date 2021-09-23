import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    create(createQuestionDto: CreateQuestionDto): import(".prisma/client").Prisma.Prisma__QuestionsClient<import(".prisma/client").Questions>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Questions[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__QuestionsClient<import(".prisma/client").Questions>;
    update(id: string, updateQuestionDto: UpdateQuestionDto): import(".prisma/client").Prisma.Prisma__QuestionsClient<import(".prisma/client").Questions>;
    remove(id: string): string;
}
