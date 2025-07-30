import { Controller, Get } from '@nestjs/common';
import { TodoService } from '../todos/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getHello(): string {
    return this.todoService.getTodos();
  }
}
