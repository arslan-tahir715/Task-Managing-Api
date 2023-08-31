import express from 'express';
import { getUser, login, register } from '../controllers/user';
import { verifyToken } from '../helpers/index';
import { createTask, viewTaskList } from '../controllers/tasks';

export const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/user', verifyToken, getUser);
router.post('/create-task', verifyToken, createTask);
router.get('/list-tasks', verifyToken, viewTaskList);

