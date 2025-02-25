import { Router } from "express";
import { getUsers, getUser, addUser, editUser, deleteUser } from '../controllers/users.controller.js'

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.patch('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;
