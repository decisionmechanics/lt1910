// using 'express', Create a simple API (on port 3001) that implements a today list
// assume the Todo item an 'id', a 'task' (string) and a 'completed' (boolean)

// use /api/todos as the base path for the API
// and supports the following operations:
// - Fetching (getting) the todo list
// - Adding items to the todo list (with a POST request)
// - Deleting items from the todo list id (a path parameter)
// • Use an array to store the todo list items. In a production application,
// the items would be held in a database, but an array will be sufficient
// for the purposes of the exercise.
// don't forget to 
// npm install express @types/express uuid @types/uuid

import express from "express";
import { v4 as uuidv4 } from 'uuid';
const PORT = 3001;
const app = express();
app.use(express.json());

type Todo = {
    id: string;
    task: string;
    completed: boolean;
};
// create a in-memory array to store todos
// and provide a few sample todos to start with such as
// "get grocery", "clean house", "walk dog", "pay bills", "read book"


let todos: Todo[] = [
    { id: uuidv4(), task: "get grocery", completed: false },
    { id: uuidv4(), task: "clean house", completed: true },
    { id: uuidv4(), task: "walk dog", completed: false },
    { id: uuidv4(), task: "read book", completed: true }
];

// get all todos
app.get("/api/todos", (req, res) => {
    res.send(todos);
});

// add a new todo
// incoming json object will have 'task' and 'completed' properties
// and usually completed starts as false
// e.g. { "task": "learn express", "completed": false }

app.post("/api/todos", (req, res) => {
    const todo = req.body as { task: string; completed: boolean };
    const newTodo: Todo = { id: uuidv4(), ...todo };
    todos.push(newTodo);
    res.status(201).send(newTodo);
});

// delete a todo by id
app.delete("/api/todos/:id", (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});

// to test this, use Rest Client or curl
// e.g. 
// curl http://localhost:3001/api/todos
// curl -X POST -H "Content-Type: application/json" -d '{"task":"learn express","completed":false}' http://localhost:3001/api/todos
// curl -X DELETE http://localhost:3001/api/todos/<id>

// OR
// using REST Client such as RESTman or POSTman
// try following requests
//
// GET http://localhost:3001/api/todos
//
// POST http://localhost:3001/api/todos
// with header:
// Content-Type: application/json
// and body:
// {
//     "task": "learn express",
//     "completed": false
// }
//
// see the response body for the id of the new todo

// again try GET http://localhost:3001/api/todos

// then delete with the id of one of the todos appemded to the path
// DELETE http://localhost:3001/api/todos/<id>

// again try GET http://localhost:3001/api/todos
// to see the todo has been deleted