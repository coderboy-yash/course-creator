import mongoose from 'mongoose';
const TaskSchema = new mongoose.Schema(
    {
        task: {
            type: 'string',
        }
    }
);
export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);
