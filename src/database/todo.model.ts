import MysqlModelCallback from "../contracts/MysqlModelCallback";
import Todo from "../contracts/Todo";
import Database from "./database";
import { v4 as uuidv4 } from 'uuid'

const db = new Database()
const TodoModel = () => {}

// Fetch all entries
TodoModel.All = ({callback}:MysqlModelCallback) => {
    db.getConnection().query("select id, task, completed from todos", (err, res) => {
        if (err) return callback(err, null)
        callback(null, res)
    })
}

// Find on record by id
TodoModel.FindOneByID = (id: string, {callback}:MysqlModelCallback) => {
    db.getConnection().query("select id, task, completed from todos where id = ?", id, (err, res) => {
        if (err) return callback(err, null)
        callback(null, res)
    })
}

// Create new record
TodoModel.Create = (todo:Todo, {callback}:MysqlModelCallback) => {
    todo = {...todo, id: uuidv4()}
    db.getConnection().query("INSERT INTO todos SET ?", todo, (err, res) => {
        if (err) return callback(err, null)
        callback(null, todo)
    })
}

// Update existing record
TodoModel.Update = (id: string, todo: Todo, {callback}:MysqlModelCallback) => {
    db.getConnection().query("UPDATE todos SET task = ?, completed = ? WHERE id = ?", [todo.task, todo.completed, id], (err, res) => {
        if (err) return callback(err, null)
        callback(null, {...todo, id: id})
    })
}

// Delete an existing record
TodoModel.Delete = (id: string, {callback}:MysqlModelCallback) => {
    db.getConnection().query("DELETE FROM todos WHERE id = ?", [id], (err, res) => {
        if (err) return callback(err, null)
        callback(null, res)
    })
}

export default TodoModel;