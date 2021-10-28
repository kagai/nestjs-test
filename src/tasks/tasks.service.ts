import { TaskRepository } from './task.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private tasksRespository: TaskRepository,
  ) {}

  async getTasksById(id: string): Promise<Task> {
    const found = await this.tasksRespository.findOne(id);
    if (!found) throw new NotFoundException(`Task with ID ${id} not found`);

    return found;
  }

  getAllTasks() {}

  createTask() {
    // const task: Task = {
    //   id: uuid(),
    //   title,
    //   desription,
    //   status: TaskStatus.COMPLETE,
    // };
  }
  deleteTasks() {}

  updateTaskStatus() {}
}
