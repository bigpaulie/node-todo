import express from "express";
import { CreateTodo, DeleteTodo, IndexTodo, ShowTodo, UpdateTodo } from '../controllers/TodoController'

const router = express.Router()

router.get("/todo", IndexTodo)
router.post("/todo", CreateTodo)
router.get("/todo/:id", ShowTodo)
router.put("/todo/:id", UpdateTodo)
router.delete("/todo/:id", DeleteTodo)

export default router;
