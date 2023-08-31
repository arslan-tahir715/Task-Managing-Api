import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  name: { 
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default: "MEDIUM",
    enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
  },
  status: {
    type: String,
    default: "Todo",
    enum: ["Todo", "In-Progress", "In-Review", "Completed"],
  },
});

export const TaskModel = model("Task", taskSchema);

export const create = (values: any) =>
  new TaskModel(values).save().then(
    (task) => task.toObject(),
  );

export const getListTasksByUserId = (userId: string) =>
  TaskModel.find({
    "userId": userId,
});

export const getListTasks = () =>
  TaskModel.find();
