import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  is_completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
