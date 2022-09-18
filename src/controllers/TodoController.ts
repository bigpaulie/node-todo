import {Request, Response} from 'express'
import { MysqlError } from 'mysql'
import MysqlModelCallback from '../contracts/MysqlModelCallback'
import Todo from '../contracts/Todo'
import TodoModel from '../database/todo.model'

export const IndexTodo = (req: Request, res: Response) => {
    const mCallback: MysqlModelCallback = {
        callback(err, result) {
            if (err) return res.json({success: false, message: err.message})
            res.json(result)
        },
    }
    TodoModel.All(mCallback)
}

export const ShowTodo = (req: Request, res: Response) => {
    const mCallback: MysqlModelCallback = {
        callback(err, result) {
            if (err) return res.json({success: false, message: err.message})
            res.json(result)
        },
    }

    const id: string = req.params.id;
    TodoModel.FindOneByID(id, mCallback)
}

export const CreateTodo = (req: Request, res: Response) => {
    const mCallback: MysqlModelCallback = {
        callback(err, result) {
            if (err) return res.json({success: false, message: err.message})
            res.json(result)
        },
    }

    const todo: Todo = {...req.body, id: ""}
    TodoModel.Create(todo, mCallback)
}

export const UpdateTodo = (req: Request, res: Response) => {
    const mCallback: MysqlModelCallback = {
        callback(err, result) {
            if (err) return res.json({success: false, message: err.message})
            res.json(result)
        },
    }

    const todo: Todo = {...req.body, id: ""}
    const id: string = req.params.id;

    TodoModel.Update(id, todo, mCallback)
}

export const DeleteTodo = (req: Request, res: Response) => {
    const mCallback: MysqlModelCallback = {
        callback(err, result) {
            if (err) return res.json({success: false, message: err.message})
            res.json({success: true, message: "Item removed successfully."})
        },
    }

    const id: string = req.params.id;
    TodoModel.Delete(id, mCallback)
}