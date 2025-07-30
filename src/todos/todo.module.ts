import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from '../todos/todo.controller';
import { TodoService } from '../todos/todo.service';
import { Todo } from './todo.entity';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
