import { IsString } from 'class-validator';
import { Question } from '../entities/question.entity';

export class CreateQuestionDto extends Question {
  @IsString()
  title: string;
}
