import { CreateTaskDto } from './dto/create-task.dto';
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

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.tasksRespository.create({
      title,
      description,
      status: TaskStatus.COMPLETE,
    });

    await this.tasksRespository.save(task);
    return task;
  }
}
