import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../schemas/user.schema';
import { CreateTodoDto } from '../dto/CreateTodoDto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllUsers(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: any): Promise<Todo> {
    return this.todoService.findById(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Patch(':id')
  updateById(@Param('id') id: any, @Body() updatedTodoDto: CreateTodoDto) {
    return this.todoService.updateById(id, updatedTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: any): Promise<Todo> {
    return this.todoService.delete(id);
  }
}
