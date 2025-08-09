import { Module } from '@nestjs/common';
import { TodoController } from '../todos/todo.controller';
import { TodoService } from '../todos/todo.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
