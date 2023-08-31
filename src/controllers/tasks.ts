import express from 'express';
import { create, getListTasks } from '../db/tasks';

export const createTask = async (req: express.Request, res: express.Response) => {
    try {
        const { userId, name, priority, stage } = req.body;
        console.log(req.body);
        const newList = await create({
            userId,
            name,
            priority,
            stage,
        });
        return res.status(200)
          .json({createdTask: newList})
          .end();
    } catch (error) {
      console.log(error);
        return res.status(500)
          .json({ message: "Error while task"});
    }
}

export const viewTaskList = async (req: express.Request, res: express.Response) => {
    try {
      const listTasks = await getListTasks();
      return res.status(200)
        .json({task: listTasks});
    } catch (error) {
      return res.status(500)
        .json({ message: "Error while fetching listTasks" });
    }
};
