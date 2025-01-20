import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';


// ------------------------------------------
// Interface declaration
export interface ITask extends Document {
  category: string;
  title: string;
  context: string;
  taskDate: string;
  taskTime: string;
  completed: boolean;
}

// ------------------------------------------
// Schema definition
const taskSchema = new Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    context: { type: String, required: true },
    taskDate: { type: String, required: true },
    taskTime: { type: String, required: true },
    completed: { type: Boolean, required: true }
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const TaskModel: Model<ITask> = model<ITask>(
  'Task', taskSchema, 'Task'
);
