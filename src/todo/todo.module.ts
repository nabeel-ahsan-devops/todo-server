import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from 'src/schemas/user.schema';
import { TodoController } from './todo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
