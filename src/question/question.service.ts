import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this.prisma.questions.create({ data: createQuestionDto });
  }

  findAll() {
    return this.prisma.questions.findMany();
  }

  findOne(id: number) {
    return this.prisma.questions.findUnique({ where: { id } });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.prisma.questions.update({
      where: { id },
      data: updateQuestionDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
