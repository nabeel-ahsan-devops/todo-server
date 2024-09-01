import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from 'src/dto/CreateTodoDto';
import { Todo } from 'src/schemas/user.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModal: Model<Todo>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModal.find().exec();
  }

  async findById(id: string): Promise<Todo> {
    return this.todoModal.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModal(createTodoDto);
    return createdTodo.save();
  }

  async updateById(id: string, update: Todo): Promise<Todo> {
    return this.todoModal
      .findByIdAndUpdate(id, update, {
        new: true,
      })
      .exec();
  }

  async delete(id: string) {
    return this.todoModal.findByIdAndDelete(id).exec();
  }
}
