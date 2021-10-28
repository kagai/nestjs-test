import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTasksById(id);
  }
}
