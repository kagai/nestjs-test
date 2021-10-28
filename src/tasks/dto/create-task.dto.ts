import { TaskStatus } from './../task-status.enum';
export class CreateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}
